const { Router } = require("express");
const Product = require("../models").product;
const router = new Router();

router.get("/"),
  async (req, res, next) => {
    const result = Product.findAll();
    try {
      if (!result) {
        res.status(400).send("products not found");
      } else {
        res.json(result);
      }
    } catch (error) {
      next(error);
    }
  };

module.exports = router;
