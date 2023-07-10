const express = require('express');
const router = express.Router();

// Route: GET /products
router.get('/', (req, res) => {
    // Handle the request for retrieving all products
    res.send('Get all products');
});

// Route: GET /products/:id
router.get('/:id', (req, res) => {
    const productId = req.params.id;
    // Handle the request for retrieving a specific product with the given ID
    res.send(`Get product with ID ${productId}`);
});

// Route: POST /products
router.post('/', (req, res) => {
    // Handle the request for creating a new product
    res.send('Create new product');
});

// Route: PUT /products/:id
router.put('/:id', (req, res) => {
    const productId = req.params.id;
    // Handle the request for updating a specific product with the given ID
    res.send(`Update product with ID ${productId}`);
});

// Route: DELETE /products/:id
router.delete('/:id', (req, res) => {
    const productId = req.params.id;
    // Handle the request for deleting a specific product with the given ID
    res.send(`Delete product with ID ${productId}`);
});

module.exports = router;
