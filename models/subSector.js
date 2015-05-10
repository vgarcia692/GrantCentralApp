"use strict";
var Sequelize = require('sequelize');
module.exports = function(sequelize) {
  var SubSector = sequelize.define("SubSector", {
    sector: Sequelize.STRING(50)
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        SubSector.hasMany(models.Idea, {through: 'CrossCutting'});
      }
    }
  });


  return SubSector;
};