
exports.up = function(knex, Promise) {
  return knex.schema.createTable('inventory', function (table) {
    table.increments();
    table.string('name');
    table.string('type');
    table.integer('count');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  
};
