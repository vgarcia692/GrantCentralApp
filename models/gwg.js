"use strict";
var Sequelize = require('sequelize');
module.exports = function(sequelize) {
  var Gwg = sequelize.define("Gwg", {
    title: Sequelize.STRING,
    beneficiary: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    approvedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW}
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Gwg;
};