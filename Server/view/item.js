const express = require('express');
const router = express.Router();
const path = require('../controller/item');

router.post('/', path.post);
router.get('/', path.get);
router.get('/:id', path.getById);
router.put('/:id', path.put);

module.exports = router;