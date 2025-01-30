//
const config = {
  client: 'sqlite3',
  connection: {
    filename: './db/stocks.db',
  },
  useNullAsDefault: true,
  migrations: {
    directory: './migrations',
  }
};
module.exports = config;
//