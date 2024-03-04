const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // Define an id column
    id: {
      // Use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // This is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // Instruct that this is the Primary Key
      primaryKey: true,
      // Turn on auto increment
      autoIncrement: true,
    },
    // Define a category_name column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
