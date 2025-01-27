//
const axios = require('axios');
const fs = require('fs');
const yahooFinance = require('yahoo-finance2').default;


function formatDate(year, month, day) {
  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
};

async function fetchBACENData(seriesCode, startDate, endDate) {
  const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${seriesCode}/dados?formato=json&dataInicial=${startDate}&dataFinal=${endDate}`;
  const response = await axios.get(url);
  return response.data;
};

async function downloadLargeDataset(seriesCode, startYear, endYear) {
  let allData = [];
  for (let year = startYear; year <= endYear; year++) {
    const startDate = formatDate(year, 1, 1);
    const endDate = formatDate(year, 12, 31);
    console.log(`Fetching data for series ${seriesCode} of ${year}`);
    try {
      const yearlyData = await fetchBACENData(seriesCode, startDate, endDate);
      allData = allData.concat(yearlyData);
    } catch (err) {
      console.error(`Failed to fetch data for year ${year}. Skipping...`)
    }
  };
  fs.writeFileSync(`series_${seriesCode}.json`, JSON.stringify(allData, null, 2));
};

downloadLargeDataset(21620, 2022, 2023);


/*
async function getBrazilStockData(symbol) {

// using historical
//  const queryOptions = { period1: '2025-01-20', };
//  const result = await yahooFinance.historical(symbol, queryOptions);

// using chart
  const queryOptions = { period1: '2025-01-20', return: "object", };
  const result = await yahooFinance.chart(symbol, queryOptions);

  //console.log(result);
  console.log(result.timestamp);
  //console.log(result.indicators.quote[0]);

  timestampArray = result.timestamp;
  dateArray = [];
  let date = new Date();

  for(elementTimeStamp of timestampArray){
    date = new Date(elementTimeStamp*1000); // *1000 to fix the timestamp from unix to javascript
    dateArray.push(date);
  };
  console.log(dateArray);

}

getBrazilStockData('PETR4.SA'); // Petrobras stock data
*/

//