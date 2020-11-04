const express = require('express');
const router = express.Router();
const PolandController = require('../controllers/Poland.controller');


router.get('/concerts', PolandController.getAll);

router.get('/concerts/:id', PolandController.getById);

module.exports = router;
