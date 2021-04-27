'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Stores", [
      {
        name: "Loja do Deko!",
        description: "vende dekos",
      },
      {
        name: "loja do Sartoreto",
        description: "vende sarto bolas",
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Stores', null, {});
  }
};
