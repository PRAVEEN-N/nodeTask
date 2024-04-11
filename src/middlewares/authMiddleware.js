const jwt = require('jsonwebtoken');
const { jwt: jwtConfig, ROLES } = require('../config');

// Middleware function for token verification
exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(400).json({ error: 'Token not provided' });

    try {
        // Decode and verify the provided token
        const decoded = jwt.verify(token, jwtConfig.secret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

exports.authorizeAdmin = (req, res, next) => {
    // Check if the user's role is admin
    if (req.user.role !== ROLES.ADMIN) {
        return res.status(403).json({ error: 'Forbidden' });
    }
    next();
};

exports.authorizeAdminManager = (req, res, next) => {
    // Check if the user's role is neither admin nor manager and return forbidden if true
    if (req.user.role !== ROLES.ADMIN && req.user.role !== ROLES.MANAGER) {
        return res.status(403).json({ error: 'Forbidden' });
    }
    next();
};