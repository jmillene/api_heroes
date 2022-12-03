'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('alignment', 
    { id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    alignment: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    power: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    heroesId: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "heroes_id",
    },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('alignment');
  }
};
