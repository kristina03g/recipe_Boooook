const { DataTypes } = require('sequelize');

const db = {}

db.recipes = require('./Recipe.js')(sequelize, DataTypes)

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db