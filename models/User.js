const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = sequelize.define(
  'User',
  {

    id: {
        type: DataTypes.INTEGER,
         primaryKey: true,
        autoIncrement: true,
      },
    name: {
          type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    image: {
      type:DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
    },
  }
);