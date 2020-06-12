"use strict";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      price: DataTypes.STRING,
    },
    {}
  );
  product.associate = function (models) {
    product.belongsTo(models.category);
    product.belongsToMany(models.order, {
      through: "orderProducts",
      foreignKey: "productId",
    });
  };
  return product;
};
