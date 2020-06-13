"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        name: "Overwatch",
        imageUrl:
          "https://s1.gaming-cdn.com/images/products/2208/orig/overwatch-cover.jpg",
        price: 50,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Skyrim",
        imageUrl:
          "https://www.nintendo.com/content/dam/noa/en_US/games/switch/t/the-elder-scrolls-v-skyrim-switch/the-elder-scrolls-v-skyrim-switch-hero.jpg",
        price: 30,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fifa20",
        imageUrl:
          "https://media.playstation.com/is/image/SCEA/fifa-20-standard-edition-01-ps4-us-05sep19?$native_nt$",
        price: 80,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "StarCraft2",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/91i3Lahl3nL._AC_SL1500_.jpg",
        price: 30,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "World Of Warcraft",
        imageUrl: "https://media.s-bol.com/jRQZ6jKmm1q5/550x780.jpg",
        price: 50,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
