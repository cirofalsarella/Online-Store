const express = require('express');
const router = express.Router();

// Route: GET /
router.get('/', (req, res) => {
    // Handle the request for the home page
    res.send('Home Page');
});

// Route: GET /about
router.get('/about', (req, res) => {
    // Handle the request for the about page
    res.send('About Page');
});

// Route: GET /contact
router.get('/contact', (req, res) => {
    // Handle the request for the contact page
    res.send('Contact Page');
});

module.exports = router;
