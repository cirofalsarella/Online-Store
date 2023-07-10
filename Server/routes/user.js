const express = require('express');
const router = express.Router();

// Route: GET /users
router.get('/', (req, res) => {
    // Handle the request for retrieving all users
    res.send('Get all users');
});

// Route: GET /users/:id
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    // Handle the request for retrieving a specific user with the given ID
    res.send(`Get user with ID ${userId}`);
});

// Route: POST /users
router.post('/', (req, res) => {
    // Handle the request for creating a new user
    res.send('Create new user');
});

// Route: PUT /users/:id
router.put('/:id', (req, res) => {
    const userId = req.params.id;
    // Handle the request for updating a specific user with the given ID
    res.send(`Update user with ID ${userId}`);
});

// Route: DELETE /users/:id
router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    // Handle the request for deleting a specific user with the given ID
    res.send(`Delete user with ID ${userId}`);
});

module.exports = router;
