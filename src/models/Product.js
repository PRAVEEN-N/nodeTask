const { Model, DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const dbConfig = require('../config').db;

// Creating a instance of Sequelize with the database parameters from the configuration
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql'
});

class Product extends Model {}

// Initializing the model with field definitions and other options
Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  inventory: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Product',
  timestamps: true
});

module.exports = Product;