const express = require('express');
const router = express.Router();

// Route: GET /items
router.get('/', (req, res) => {
    // Handle the request for retrieving all items
    res.send('Get all items');
});

// Route: GET /items/:id
router.get('/:id', (req, res) => {
    const itemId = req.params.id;
    // Handle the request for retrieving a specific item with the given ID
    res.send(`Get item with ID ${itemId}`);
});

// Route: POST /items
router.post('/', (req, res) => {
    // Handle the request for creating a new item
    res.send('Create new item');
});

// Route: PUT /items/:id
router.put('/:id', (req, res) => {
    const itemId = req.params.id;
    // Handle the request for updating a specific item with the given ID
    res.send(`Update item with ID ${itemId}`);
});

// Route: DELETE /items/:id
router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    // Handle the request for deleting a specific item with the given ID
    res.send(`Delete item with ID ${itemId}`);
});

module.exports = router;
