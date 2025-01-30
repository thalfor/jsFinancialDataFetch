//
const yahooFinance = require('yahoo-finance2').default;

async function getBrazilStockData(symbol, startPeriod) {

// using historical
//  const queryOptions = { period1: '2025-01-20', };
//  const result = await yahooFinance.historical(symbol, queryOptions);

// using chart
  const queryOptions = { period1: startPeriod, return: "object", };
  const result = await yahooFinance.chart(symbol, queryOptions);

  //console.log(result);
  //console.log(result.timestamp);
  //console.log(result.indicators.quote[0]);
  const resultObject = result.indicators.quote[0];

  timestampArray = result.timestamp;
  dateArray = [];
  let date = new Date();

  for(elementTimeStamp of timestampArray){
    date = new Date(elementTimeStamp*1000); // *1000 to fix the timestamp from unix to javascript
    dateArray.push(date);
  };
  //console.log(dateArray);

  let finalObject = {};
  



};
//
//
//
async function stocksLoopFunction(stockArray, startPeriod){

  for(const stock of stockArray){
    try {
      await getBrazilStockData(stock, startPeriod);
      console.log(`completed download for stock ${stock}`);
    } catch(error) {
      console.error(`Failed to download stock: ${stock}`);
    }
  };

};

module.exports.stocksLoopFunction = stocksLoopFunction;  
//