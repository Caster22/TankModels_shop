const express = require('express');
const router = express.Router();
const GBController = require('../controllers/GB.controller');


router.get('/concerts', GBController.getAll);

router.get('/concerts/:id', GBController.getById);

module.exports = router;
