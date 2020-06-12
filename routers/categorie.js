const { Router } = require("express");
const Category = require("../models").category;
const router = new Router();

router.get("/", async (req, res, next) => {
  const result = await Category.findAll();
  console.log(result);
  try {
    if (!result) {
      res.status(400).send("Category not found");
    } else {
      res.json(result);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
