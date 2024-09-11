const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')

module.exports = sequelize.define(
    'Categories',{
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name: {
            type:DataTypes.STRING
        },
        hierarchy:{
            type:DataTypes.INTEGER
        },
        matter: {
            type:DataTypes.ARRAY(DataTypes.STRING),
            defaultValue:[]
        },
        image: {
            type:DataTypes.STRING
        },
        body: {
            type:DataTypes.STRING
        }


})