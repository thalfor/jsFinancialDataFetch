/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('dbStocksHistory', (table) => {
    table.increments('primaryID').primary();
    table.string('stockTicker');
    table.datetime('date');
    table.float('volume');
    table.float('open');
    table.float('low');
    table.float('high');
    table.float('close');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable('dbStocksHistory');
};
