//
const { error } = require('console');
const { formatDateDMY } = require('./auxiliary/formatDateDMY.js');
const { fetchDataBACEN } = require('./auxiliary/fetchDataBACEN.js');
const knex = require('../database.js');
const { v4:uuidv4 } = require('uuid');
const moment = require('moment');
//
//
async function downloadLargeDataset(seriesCode, startYear, endYear) {
  let allData = [];
  for (let year = startYear; year <= endYear; year++) {
    const startDate = formatDateDMY(year, 1, 1);
    const endDate = formatDateDMY(year, 12, 31);
    console.log(`Fetching data for series ${seriesCode} of ${year}`);
    try {
      const yearlyData = await fetchDataBACEN(seriesCode, startDate, endDate);
      allData = allData.concat(yearlyData);
    } catch (error) {
      console.error(`Failed to fetch data for year ${year}. Skipping...`)
    }
  };

  const rowsDB = allData.map((entry) => {
    if (!moment(entry.data, 'DD/MM/YYYY', true).isValid()) {
      console.error(`Invalid date found: ${entry.data}`);
      return null;
    }
  
    return {
      primaryID: uuidv4(),
      code: seriesCode,
      date: moment(entry.data, 'DD/MM/YYYY').toDate().toISOString(),
      value: parseFloat(entry.valor),
    };
  }).filter(row => row !== null);

  const batchSize = 500; // Adjust this if necessary

  for (let i = 0; i < rowsDB.length; i += batchSize) {
    const batch = rowsDB.slice(i, i + batchSize);

    await knex('db_SelicIPCA')
      .insert(batch)
      .onConflict(['code', 'date'])
      .ignore()
      .then(() => console.log(`Inserted batch ${i / batchSize + 1} for series ${seriesCode}`))
      .catch((error) => console.error(`Error inserting batch: ${error.message}`));
  };

};
//
//
async function updateSelicIPCA(){

  const indicatorSubquery = knex('db_financialIndicators')
    .select('db_financialIndicators.indicator')
    .whereRaw('db_SelicIPCA.code = db_financialIndicators.code');

  const descriptionSubquery = knex('db_financialIndicators')
    .select('db_financialIndicators.description')
    .whereRaw('db_SelicIPCA.code = db_financialIndicators.code');

  const periodSubquery = knex('db_financialIndicators')
    .select('db_financialIndicators.period')
    .whereRaw('db_SelicIPCA.code = db_financialIndicators.code');
  
  await knex('db_SelicIPCA')
    .update({
      indicator: indicatorSubquery,
      description: descriptionSubquery,
      period: periodSubquery,
    })
    .whereExists(
      knex('db_financialIndicators')
        .whereRaw('db_SelicIPCA.code = db_financialIndicators.code')
    );

};
//
//
async function loopFunctionSelicIPCA(arrayIndicators, startYear, endYear){
  try {
    for (const indicator of arrayIndicators){
      try {
        await downloadLargeDataset(indicator, startYear, endYear);
        console.log(`indicator ${indicator} processed!`);
      } catch(error) {
        console.error(`Failed to download indicator: ${indicator}. Error: ${error.message}`);
      };  
    };
    await updateSelicIPCA();
    console.log('database updated');
  } catch(error) {
    console.error(`error: ${error}`) ;
  } finally {
    await knex.destroy();
  };
};
//
//
module.exports.loopFunctionSelicIPCA = loopFunctionSelicIPCA;
//
/*
  await knex.raw(`
    update a
      set a.indicator = b.indicator,
          a.description = b.description, 
          a.period = b.period
      from db_SelicIPCA as a
      inner join db_financialIndicators as b on a.code = b.code;
    `);
*/