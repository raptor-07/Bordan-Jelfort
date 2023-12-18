const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");

authRouter.post(
  "/addUserSubscriptions",
  authController.addUserSubscriptions(req, res)
);

module.exports = authRouter;
