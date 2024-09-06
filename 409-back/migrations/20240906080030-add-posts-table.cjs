'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      piratesId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts')
  }
};
