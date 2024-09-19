'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Matters.init({
    name: DataTypes.STRING,
    hierarchy: DataTypes.INTEGER,
    image: DataTypes.STRING,
    body: DataTypes.TEXT,
    slug: DataTypes.STRING,
    originUserID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Matters',
  });
  return Matters;
};