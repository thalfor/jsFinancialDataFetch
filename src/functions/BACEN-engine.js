//
const { error } = require('console');
const fs = require('fs');
const path = require('path');
const formatDateDMY = require('./auxiliary/formatDateDMY.js');
const fetchBACENData = require('./auxiliary/fetchDataBACEN.js');
//
//
//
async function downloadLargeDataset(seriesCode, startYear, endYear) {
  let allData = [];
  for (let year = startYear; year <= endYear; year++) {
    const startDate = formatDateDMY(year, 1, 1);
    const endDate = formatDateDMY(year, 12, 31);
    console.log(`Fetching data for series ${seriesCode} of ${year}`);
    try {
      const yearlyData = await fetchBACENData(seriesCode, startDate, endDate);
      allData = allData.concat(yearlyData);
    } catch (error) {
      console.error(`Failed to fetch data for year ${year}. Skipping...`)
    }
  };
  const folderPath = path.resolve(__dirname, '../../db');
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
  const filePath = path.join(folderPath, `series_${seriesCode}.json`);
  fs.writeFileSync(filePath, JSON.stringify(allData, null, 2));
};
//
//
//
async function financialIndicatorsLoopFunction(arrayIndicators, startYear, endYear){
  for (const indicator of arrayIndicators){
    try {
      await downloadLargeDataset(indicator, startYear, endYear);
      console.log(`indicator ${indicator} processed!`)
    } catch(error) {
      console.error(`Failed to download indicator: ${indicator}. Error: ${error.message}`)
    }
  };
};

module.exports.financialIndicatorsLoopFunction = financialIndicatorsLoopFunction;
//