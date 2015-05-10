"use strict";
var Sequelize = require('sequelize');
module.exports = function(sequelize) {
  var Idea = sequelize.define("Idea", {
    title: Sequelize.STRING(50),
    approved: { type: Sequelize.BOOLEAN, defaultValue: false },
    createdAt: { type: Sequelize.DATEONLY, defaultValue: Sequelize.NOW},
    department: Sequelize.STRING(100),
    sector: Sequelize.STRING(100),
    idea: Sequelize.TEXT,
    outcomes: Sequelize.TEXT,
    projectDesc: Sequelize.TEXT,
    estimatedBudget: Sequelize.INTEGER,
    evaluation: Sequelize.TEXT
  }, {
    timestamps: true,
    updatedAt: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Idea.hasMany(models.SubSector, {through: 'CrossCutting'});
        Idea.hasOne(models.Gwg);
      }
    }
  });

  return Idea;
};
