'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TarifGrid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.PeopleType, { foreignKey: 'peopleType_id' });
      this.belongsTo(models.DayType, { foreignKey: 'dayType_id' })
    }
  }
  TarifGrid.init({
    peopleType_id: DataTypes.INTEGER,
    dayType_id: DataTypes.INTEGER,
    date: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TarifGrid',
  });
  return TarifGrid;
};
