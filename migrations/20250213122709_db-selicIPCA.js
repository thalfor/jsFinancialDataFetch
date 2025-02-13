/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('db_SelicIPCA', (table) => {
    table.uuid('primaryID').primary();
    table.unique(['indicator', 'date']);
    table.string('period');
    table.string('code');
    table.string('indicator');
    table.string('description');
    table.datetime('date');
    table.float('value');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable('db_SelicIPCA');
};
