'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class specialhighlights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  specialhighlights.init({
    stage_events_id: DataTypes.INTEGER,
    stage_id: DataTypes.SMALLINT,
    event_id: DataTypes.SMALLINT,
    specialhighlights: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'specialhighlights',
  });
  return specialhighlights;
};