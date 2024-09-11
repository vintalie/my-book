const path = require('path')
const { Sequelize } = require('sequelize')

module.exports = new Sequelize('meu_caderno','root','Mrmario764*',{
    host:'localhost',
    dialect: 'mysql'

})