"use strict";
var Sequelize = require('sequelize');
module.exports = function(sequelize) {
  var Rfp = sequelize.define("Rfp", {
      approved: { type: Sequelize.BOOLEAN, defaultValue: false },
      date: { type: Sequelize.DATEONLY, defaultValue: Sequelize.NOW},
      fundingAgency: Sequelize.STRING(100),
      agencyProgram: Sequelize.STRING(100),
      dueDate: Sequelize.DATEONLY,
      actualFundsAvailable: Sequelize.INTEGER,
      aveAward: Sequelize.INTEGER,
      numOfAwards: Sequelize.INTEGER,
      grantPeriodBegin: Sequelize.DATEONLY,
      grantPeriodEnd: Sequelize.DATEONLY,
      awardNotification: Sequelize.DATEONLY,
      matching: Sequelize.BOOLEAN,
      inKind: Sequelize.TEXT,
      deptUnit: Sequelize.STRING(100),
      programOfficer: Sequelize.STRING(100),
      commPartner: Sequelize.TEXT,
      rfpSummary: Sequelize.TEXT,
      eligibilityInfo: Sequelize.TEXT,
      appContents: Sequelize.TEXT,
      competitivePosition: Sequelize.TEXT,
      fundingHistory: Sequelize.TEXT,
      proposalDeveloped: Sequelize.TEXT,
      govCounterpart: Sequelize.STRING(100)
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          Rfp.hasOne(models.Gwg);
      }
    }
  });
  return Rfp;
};