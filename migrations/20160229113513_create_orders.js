exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function (table) {
    table.increments();
    table.string('name');
    table.string('option');
    table.integer('price');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {

};