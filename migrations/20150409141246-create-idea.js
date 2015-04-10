"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Ideas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      approved: {
        type: DataTypes.BOOLEAN
      },
      beneficiary: {
        type: DataTypes.STRING
      },
      amount: {
        type: DataTypes.INTEGER
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Ideas").done(done);
  }
};