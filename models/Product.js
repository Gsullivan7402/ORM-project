const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    // Define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define a product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define a price column
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    // Define a stock column
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10, // Default value of 10
      validate: {
        isNumeric: true,
      },
    },
    // Define a category_id column
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category', // This is a reference to another model
        key: 'id', // This is the column name of the referenced model
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
