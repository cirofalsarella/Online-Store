const express = require('express');
const router = express.Router();

// Route: GET /
router.get('/', (req, res) => {
    // Handle the request for the landing page
    res.send('Landing Page');
});

// Route: GET /login
router.get('/login', (req, res) => {
    // Handle the request for the login page
    res.send('Login Page');
});

// Route: GET /register
router.get('/register', (req, res) => {
    // Handle the request for the register page
    res.send('Register Page');
});

module.exports = router;
