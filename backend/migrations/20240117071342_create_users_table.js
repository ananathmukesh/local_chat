/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.bigIncrements('id').primary();
        table.string('firstname', 255).notNullable();
        table.string('lastname', 255).notNullable();
        table.string('email', 255).notNullable().unique().index();
        table.string('password', 255).notNullable();
        table.string('otp_verify', 255);
        table.string('otp_no', 255);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.text('profile_image');
        table.boolean('pinned').defaultTo(false);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
