const express = require('express');
const router = express.Router();
const GBController = require('../controllers/GB.controller');


router.get('/gb', GBController.getAll);

router.get('/gb/:id', GBController.getById);

module.exports = router;
