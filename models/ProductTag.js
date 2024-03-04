const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // Define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define a product_id column
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // This is a reference to another model
        key: 'id', // This is the column name of the referenced model
      },
    },
    // Define a tag_id column
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // This is a reference to another model
        key: 'id', // This is the column name of the referenced model
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
