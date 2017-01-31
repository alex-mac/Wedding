'use strict';
module.exports = function(sequelize, DataTypes) {
  var response = sequelize.define('response', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    adults: DataTypes.INTEGER,
    children: DataTypes.INTEGER,
    infants: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return response;
};