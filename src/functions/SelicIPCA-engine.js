//
const { error } = require('console');
const { formatDateDMY } = require('./auxiliary/formatDateDMY.js');
const { fetchDataSelicIPCA } = require('./auxiliary/fetchDataSelicIPCA.js');
const knex = require('../database');
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
      const yearlyData = await fetchDataSelicIPCA(seriesCode, startDate, endDate);
      allData = allData.concat(yearlyData);
    } catch (error) {
      console.error(`Failed to fetch data for year ${year}. Skipping...`)
    }
  };

  const rowsDB = allData.map((entry) => ({
    primaryID: uuidv4(),
    code: seriesCode,
    date: moment(entry.data, 'DD/MM/YYYY').toDate().toISOString(),
    value: parseFloat(entry.valor),
  }));

  await knex('db_SelicIPCA')
    .insert(rowsDB)
    .onConflict(['indicator','date'])
    .ignore();

};
//
//
async function updateSelicIPCA(){
  await knex.raw(`
    update a
      set a.indicator = b.indicator,
          a.description = b.description, 
          a.period = b.period
      from db_SelicIPCA as a
      inner join db_financialIndicators as b on a.codeIndicator = b.code;
    `);
};
//
//
async function loopFunctionSelicIPCA(arrayIndicators, startYear, endYear){
  for (const indicator of arrayIndicators){
    try {
      await downloadLargeDataset(indicator, startYear, endYear);
      console.log(`indicator ${indicator} processed!`)
    } catch(error) {
      console.error(`Failed to download indicator: ${indicator}. Error: ${error.message}`)
    }
  };
  knex.destroy();
};
//
//
module.exports.loopFunctionSelicIPCA = loopFunctionSelicIPCA;
//