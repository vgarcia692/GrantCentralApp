"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("crosscuttings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sector: {
        type: DataTypes.STRING
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("crosscuttings").done(done);
  }
};