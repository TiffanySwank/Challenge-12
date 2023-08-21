const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define other fields for employee model
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'employee',
  }
);

module.exports = Employee;