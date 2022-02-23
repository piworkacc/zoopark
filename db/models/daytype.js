'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DayType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.TarifGrid, { foreignKey: 'dayType_id' })
    }
  }
  DayType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DayType',
  });
  return DayType;
};
