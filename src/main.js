//
const axios = require('axios');
const fs = require('fs');
const yahooFinance = require('yahoo-finance2').default;

/*
async function fetchBACENData(seriesCode, startDate, endDate) {
  const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${seriesCode}/dados?formato=json&dataInicial=${startDate}&dataFinal=${endDate}`;
  const response = await axios.get(url);
  return response.data;
}

async function downloadLargeDataset(seriesCode, startYear, endYear) {
  let allData = [];
  for (let year = startYear; year <= endYear; year++) {
    const startDate = `${year}-01-01`;
    const endDate = `${year}-12-31`;
    const yearlyData = await fetchBACENData(seriesCode, startDate, endDate);
    allData = allData.concat(yearlyData);
  }
  fs.writeFileSync(`series_${seriesCode}.json`, JSON.stringify(allData, null, 2));
}

downloadLargeDataset(433, 2000, 2023);
*/


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


//