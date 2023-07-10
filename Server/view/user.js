const express = require('express');
const router = express.Router();
const path = require('../controller/user');

router.post('/', path.post);
router.get('/auth/:email/:password', path.get);
router.get('/:id', path.getById);
router.put('/:id', path.put);

module.exports = router;