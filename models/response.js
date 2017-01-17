'use strict';
module.exports = function(sequelize, DataTypes) {
  var response = sequelize.define('response', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return response;
};