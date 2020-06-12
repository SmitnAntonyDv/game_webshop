"use strict";
module.exports = (sequelize, DataTypes) => {
  const orderProducts = sequelize.define(
    "orderProducts",
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {}
  );
  orderProducts.associate = function (models) {
    orderProducts.belongsTo(models.product);
    orderProducts.belongsTo(models.order);
  };
  return orderProducts;
};
