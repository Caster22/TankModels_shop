const express = require('express');
const router = express.Router();
const PolandController = require('../controllers/Poland.controller');


router.get('/poland', PolandController.getAll);

router.get('/poland/:id', PolandController.getById);

module.exports = router;
