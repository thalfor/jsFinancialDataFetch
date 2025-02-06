//
const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function arrayStocksCreation(folderPath, outputFile) {
  const uniqueValues = new Set();
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);

    if (path.extname(file).toUpperCase() === '.TXT') {
      const fileStream = fs.createReadStream(filePath, 'utf-8');
      const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

      for await (const line of rl) {
        if (line.length >= 24) {
          const extractedValue = line.substring(12, 24).trimEnd().concat('.SA');
          uniqueValues.add(extractedValue);
        }
      }
    }
  }

  fs.writeFileSync(outputFile, [...uniqueValues].join('\n'), 'utf-8');
  console.log(`✅ Successfully saved ${uniqueValues.size} unique stocks to ${outputFile}`);
};

const folderPath = path.join(__dirname, '../histTickerB3');
const outputFile = path.join(__dirname, 'unique_stocks.txt');
arrayStocksCreation(folderPath, outputFile);
//