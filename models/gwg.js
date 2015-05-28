"use strict";
var Sequelize = require('sequelize');
module.exports = function(sequelize) {
  var Gwg = sequelize.define("Gwg", {
    title: Sequelize.STRING(50),
    projectDirector: Sequelize.STRING(50),
    stratPlan: Sequelize.STRING(100),
    govCounterpart: Sequelize.STRING(80),
    vp: Sequelize.STRING(50),
    dean: Sequelize.STRING(50),
    coreIdea: Sequelize.TEXT,
    goalsAndObj: Sequelize.TEXT,
    supportingEvi: Sequelize.TEXT,
    projectDesc: Sequelize.TEXT,
    estBudget: Sequelize.INTEGER,
    evaluation: Sequelize.TEXT,
    documentLink: Sequelize.STRING(100),
    approvedAt: { type: Sequelize.DATEONLY, defaultValue: Sequelize.NOW}
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