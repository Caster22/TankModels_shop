const express = require('express');
const router = express.Router();
const USSRController = require('../controllesrs/USSR.controller');


router.get('/concerts', USSRController.getAll);

router.get('/concerts/:id', USSRController.getById);

module.exports = router;
