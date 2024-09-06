'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Pirates', {
      // Определение столбцом
      name: {
        type: Sequelize.STRING, // Тип данных
        allowNull: false       // Обязательное для заполнения
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true          // Уникальное значение
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updateAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    }
    )
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pirates');
  }
};