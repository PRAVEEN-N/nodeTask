const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Route for registering a new user.
router.post('/register', authController.register);

// Route for logging in a user.
router.post('/login', authController.login);

module.exports = router;