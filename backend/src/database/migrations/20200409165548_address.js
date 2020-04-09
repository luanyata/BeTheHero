exports.up = function(knex) {
  return knex.schema.alterTable("ongs", (table) => {
    table
      .string("street")
      .notNullable()
      .default("");
    table
      .string("numberAddress")
      .notNullable()
      .default("");
    table
      .string("complement")
      .notNullable()
      .default("");
    table
      .string("neighborhood")
      .notNullable()
      .default("");
    table
      .string("zip")
      .notNullable()
      .default("");
    table
      .string("country")
      .notNullable()
      .default("");
  });
};

exports.down = function(knex) {
  return knex.migrate.rollback();
};
