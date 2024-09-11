const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = sequelize.define(
  'Activities',{
    id: {
        type: DataTypes.INTEGER,
         primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
  },
    subject: {
        type: DataTypes.STRING
    },
    images:{
      type: DataTypes.JSON
    },
    matter:{
      type: DataTypes.JSON
    },
    body:{
        type: DataTypes.TEXT
    },
    categories:{
      type: DataTypes.JSON
    },
    originUserID:{
      type: DataTypes.INTEGER
    }
    
  })