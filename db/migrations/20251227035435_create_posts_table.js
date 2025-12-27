/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.text('content').notNullable();
    table.text('category').notNullable();
    table.specificType('tags', 'text[]').notNullable().defaultTo('{}');
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('posts');
}
