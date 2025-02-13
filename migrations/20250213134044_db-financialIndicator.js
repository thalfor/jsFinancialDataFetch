/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('db_financialIndicators',(table) => {
    table.string('code')
    table.string('indicator')
    table.string('description')
    table.string('period')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable('db_financialIndicators');
};
