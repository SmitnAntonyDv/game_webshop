const { Router } = require("express");
const User = require("../models").user;
const Order = require("../models").order;
const router = new Router();

//get all users
router.get("/", async (req, res, next) => {
  const getUser = await User.findAll();
  try {
    if (!getUser) {
      res.status(400).send("user not found");
    } else {
      res.send(getUser);
    }
  } catch (e) {
    next(e);
  }
});

//get user by ID
router.get("/:userId", async (req, res, next) => {
  const { userId } = req.params;
  console.log({ message: "Who is user?" }, userId);
  try {
    const specificUser = await User.findByPk(userId);
    if (!specificUser) {
      res.status(400).send("user not found");
    } else {
      res.json(specificUser);
    }
  } catch (e) {
    next(e);
  }
});

//get user by ID and his orders
router.get("/:userId/order", async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId, {
      include: [Order],
    });
    res.send(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
