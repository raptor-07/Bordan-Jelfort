const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');

authRouter.post('/addUserSubscriptions', (req, res) => {
    authController.addUserSubscriptions(req, res);
});

module.exports = authRouter;