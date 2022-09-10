'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('specialHighLights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_events_id: {
        type: Sequelize.INTEGER
      },
      stage_id: {
        type: Sequelize.SMALLINT
      },
      event_id: {
        type: Sequelize.SMALLINT
      },
      specialhighlights: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('specialhighlights');
  }
};