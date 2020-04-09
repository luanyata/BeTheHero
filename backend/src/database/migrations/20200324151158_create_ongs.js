exports.up = function(knex) {
  return knex.schema.createTable("ongs", (table) => {
    table.string("id").primary();
    table.string("name").notNullable();
    table
      .string("login")
      .notNullable()
      .unique(true);
    table.string("password").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
