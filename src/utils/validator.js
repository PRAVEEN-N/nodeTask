const validator = require('validator');
const { ROLES } = require('../config');
exports.validateRegistration = (username, email, password, role) => {
    const errors = [];

    // Check if username exists and is a non-empty
    if (!username || typeof username !== 'string') {
        errors.push("Username is required.");
    }

    //Check if email exists and is valid
    if (!email || !validator.isEmail(email)) {
        errors.push("Valid email is required.");
    }

    // Check if password exists and length is atleast 6 characters
    if (!password || password.length < 6) {
        errors.push("Password is required and should be at least 6 characters long.");
    }


    //Check if role exists, is a string and one of the predefined categories
    const allowedRoles = Object.values(ROLES);
    if (!role || typeof role !== 'string' || !allowedRoles.includes(role)) {
        errors.push("Role is mandatory and must be either admin, manager, or staff.");
    }

    if (errors.length > 0) {
        throw new Error(errors.join(' '));
    }
};

exports.validateLogin = (email, password) => {
    const errors = [];

    // Check if Email exists and is valid
    if (!email || !validator.isEmail(email)) {
        errors.push("Valid email is required.");
    }

    // Check if password exists and length is atleast 6 characters
    if (!password || password.length < 6) {
        errors.push("Password is required and should be at least 6 characters long.");
    }

    if (errors.length > 0) {
        throw new Error(errors.join(' '));
    }
};
