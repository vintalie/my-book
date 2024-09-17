'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Activities.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    subject: DataTypes.STRING,
    images: DataTypes.STRING,
    matter: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    categories: DataTypes.INTEGER,
    originUserID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Activities',
  });
  return Activities;
};