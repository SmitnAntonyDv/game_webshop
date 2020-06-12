"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Matias",
        email: "matias@codaisseur.com",
        password: bcrypt.hashSync("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Robert",
        email: "robert@asas.com",
        password: bcrypt.hashSync("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
