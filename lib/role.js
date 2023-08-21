const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    // Define other fields for role model
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'role',
  }
);

module.exports = Role;