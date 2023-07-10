const express = require('express');
const router = express.Router();

// Route: GET /admin
router.get('/', (req, res) => {
    // Handle the request for the admin dashboard
    res.send('Admin Dashboard');
});

// Route: GET /admin/users
router.get('/users', (req, res) => {
    // Handle the request for viewing all users
    res.send('Admin Users');
});

// Route: POST /admin/users
router.post('/users', (req, res) => {
    // Handle the request for creating a new user
    res.send('Create User');
});

// Route: GET /admin/products
router.get('/products', (req, res) => {
    // Handle the request for viewing all products
    res.send('Admin Products');
});

// Route: POST /admin/products
router.post('/products', (req, res) => {
    // Handle the request for creating a new product
    res.send('Create Product');
});

module.exports = router;
