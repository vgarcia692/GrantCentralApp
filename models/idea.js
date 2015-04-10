"use strict";
var Sequelize = require('sequelize');
module.exports = function(sequelize) {
  var Idea = sequelize.define("Idea", {
    title: Sequelize.STRING,
    approved: { type: Sequelize.BOOLEAN, defaultValue: false },
    beneficiary: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW}
  }, {
    timestamps: true,
    updatedAt: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Idea;
};
