const {
  engine, timestamps, properties,
} = require('../helper.js');

module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('candidates', Object
    .assign(properties('candidate', DataTypes), timestamps(1, DataTypes)), engine),
  down(queryInterface) {
    return queryInterface.dropTable('candidates');
  },
};
