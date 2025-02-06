//
const yahooFinance = require('yahoo-finance2').default;
const knex = require('../database');

async function getBrazilStockData(symbol, startPeriod) {

// using historical
//  const queryOptions = { period1: '2025-01-20', };
//  const result = await yahooFinance.historical(symbol, queryOptions);

// using chart
  try {
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
      date: new Date(date).toISOString(),
      volume: finalObject.volume[index],
      open: finalObject.open[index],
      low: finalObject.low[index],
      high: finalObject.high[index],
      close: finalObject.close[index],

    }));

    const chunkSize = 100;

    for (let i = 0; i < rowsDB.length; i += chunkSize) {
      const chunk = rowsDB.slice(i, i + chunkSize);
      try {
        await knex('dbStocksHistory')
          .insert(chunk)
          .onConflict(['stockTicker', 'date'])
          .ignore();        
        console.log(`inserted chunk ${i / chunkSize + 1} for stock ${symbol}`);
      } catch (error) {
        console.error(`error inserting chunk ${i / chunkSize + 1} for stock ${symbol}. error: ${error}`);
      };
    };
  } catch(error) {
    console.log(`ticker ${symbol} not listed`);
  };
};
//
//
//
async function stocksLoopFunction(stockArray, startPeriod){

  for(stock of stockArray){
    try {
      await getBrazilStockData(stock, startPeriod);
      console.log(`completed download for stock ${stock}`);
    } catch(error) {
      console.error(`Failed to download stock: ${stock}`);
    };
  };
  knex.destroy();

};

module.exports.stocksLoopFunction = stocksLoopFunction;  
//