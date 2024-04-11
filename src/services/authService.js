const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwt: jwtConfig } = require('../config');

class AuthService {

    // Register method to create a new user
    static async register(username, email, password, role) {
        // Hash the plaintext password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user in the database
        let user = await User.create({ username, email, password: hashedPassword, role });
        user = user.toJSON();
        delete user.password;
        return user;
    }

    static async login(email, password) {

        // Find user by email
        let user = await User.findOne({ where: { email } });
        user = user.toJSON();
        // Throw error if user not found
        if (!user) throw new Error('Invalid email');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error('Invalid password');

        // Generate JWT token
        const token = this.generateToken(user);
        delete user.password;
        return { user, token };
    }

    static generateToken(user) {
        const { id, username, email, role } = user;

        // Sign and return the JWT token
        return jwt.sign({ id, username, email, role }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
    }
}

module.exports = AuthService;