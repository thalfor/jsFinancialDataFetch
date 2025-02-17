//
// run this code one at a time!
//
// run this before anything to update the data base with the descriptions that will be used.
//const { insertSQL } = require('./functions/BACEN-indicatorDescription');
//insertSQL();
//
//
//
const { loopFunctionSelicIPCA } = require('./functions/BACEN-engine');
const arrayBACEN = require('./arrays/BACEN');
loopFunctionSelicIPCA(arrayBACEN, 2000, 2025).then(() => console.log(`all indicators processed.`)).catch(() => console.error(`error, check function.`));
//
//
//
//const { stocksLoopFunction } = require('./functions/B3-engine');
//const arrayStocks = require('./arrays/B3');
//stocksLoopFunction(arrayStocks, '2000-01-20').then(() => console.log(`all ticker processed.`)).catch(() => console.error(`error, check function.`));
//