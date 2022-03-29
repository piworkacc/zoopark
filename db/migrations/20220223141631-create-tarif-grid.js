'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TarifGrids', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      peopleType_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'PeopleTypes',
          key: 'id'
        }
      },
      dayType_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'DayTypes',
          key: 'id'
        }
      },
      date: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TarifGrids');
  }
};
