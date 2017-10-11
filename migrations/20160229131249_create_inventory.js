
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function (table) {
    table.increments();
    table.string('title');
    table.string('type');
    table.integer('qty');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  
};
