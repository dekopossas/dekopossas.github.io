'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const StoresTable = queryInterface.createTable("Stores", {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("Stores");
  }
};
