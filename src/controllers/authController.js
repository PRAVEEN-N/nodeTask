const AuthService = require('../services/authService');
const validator = require('../utils/validator');


exports.register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Validate input data
        validator.validateRegistration(username, email, password, role);

        // Create a new user
        const user = await AuthService.register(username, email, password, role);
        res.status(201).json({ message: 'User created', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input data
        validator.validateLogin(email, password);

        // Call AuthService's login method to authenticate the user
        const { user, token } = await AuthService.login(email, password);
        
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};