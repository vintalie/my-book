const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')
const { toDefaultValue } = require('sequelize/lib/utils')

module.exports = sequelize.define(
    'Matters',{
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name: {
            type:DataTypes.STRING
        },
        hierarchy:{
            type:DataTypes.DECIMAL,
            defaultValue:0
        },
        image: {
            type:DataTypes.STRING
        },
        body: {
            type:DataTypes.STRING
        },
        slug:{
            type:DataTypes.STRING
        },
        originUserID:{
            type:DataTypes.INTEGER
        }
        

})