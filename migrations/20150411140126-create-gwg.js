"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Gwgs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      beneficiary: {
        type: DataTypes.STRING
      },
      amount: {
        type: DataTypes.INTEGER
      },
      approvedAt: {
        type: DataTypes.Date
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Gwgs").done(done);
  }
};