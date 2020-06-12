"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        title: "FPS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "RTS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "SPORTS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "RPG",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "MMORPG",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
