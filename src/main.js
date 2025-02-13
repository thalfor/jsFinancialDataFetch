//
// run this code one at a time!
//
const { loopFunctionSelicIPCA } = require('./functions/SelicIPCA-engine');
const arraySelicIPCA = require('./arrays/SelicIPCA');
loopFunctionSelicIPCA(arraySelicIPCA, 2024, 2025).then(() => console.log(`all indicators processed.`)).catch(() => console.error(`error, check function.`));
//
//const { stocksLoopFunction } = require('./functions/B3-engine');
//const arrayStocks = require('./arrays/B3');
//stocksLoopFunction(arrayStocks, '2000-01-20').then(() => console.log(`all ticker processed.`)).catch(() => console.error(`error, check function.`));
//