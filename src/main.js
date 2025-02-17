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
const { stocksLoopFunction } = require('./functions/B3-engine');
const arrayStocks = require('./arrays/B3');


async function runEverything(){

  try{
    //BACEN
    console.log(`processing BACEN`);
    await loopFunctionSelicIPCA(arrayBACEN, 2000, 2025);
    console.log(`processed BACEN!`);
    //B3
    console.log(`processing B3`);
    await stocksLoopFunction(arrayStocks, '2025-02-01');
    console.log(`processed B3!`);
    
  } catch(error) {
    console.error(`error: ${error}`);
  };
};

runEverything();
//