//
const yahooFinance = require('yahoo-finance2').default;
const knex = require('../database');

async function getBrazilStockData(symbol, startPeriod) {

// using historical
//  const queryOptions = { period1: '2025-01-20', };
//  const result = await yahooFinance.historical(symbol, queryOptions);

// using chart
  const queryOptions = { period1: startPeriod, return: "object", };
  const result = await yahooFinance.chart(symbol, queryOptions);

  timestampArray = result.timestamp;
  dateArray = [];
  let date = new Date();

  for(elementTimeStamp of timestampArray){
    date = new Date(elementTimeStamp*1000); // *1000 to fix the timestamp from unix to javascript
    dateArray.push(date);
  };

  let finalObject = {};

  finalObject.stockTicker = symbol;
  finalObject.dates = dateArray;
  finalObject.volume = result.indicators.quote[0].volume;
  finalObject.open = result.indicators.quote[0].open;
  finalObject.low = result.indicators.quote[0].low;
  finalObject.high = result.indicators.quote[0].high;
  finalObject.close = result.indicators.quote[0].close;

  const rowsDB = finalObject.dates.map((date, index) => ({

    stockTicker: finalObject.stockTicker,
    date: date,
    volume: finalObject.volume[index],
    open: finalObject.open[index],
    low: finalObject.low[index],
    high: finalObject.high[index],
    close: finalObject.close[index],

  }));

  await knex('dbStocksHistory')
    .insert(rowsDB)
    .then(() => {
      console.log(`successfully inserted data for stockTicker ${symbol}`);
    })
    .catch((error) => {
      console.error(`error inserting data for stockTicker ${symbol}: ${error}`);
    })
    .finally(() => {
      knex.destroy();
    });

  
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