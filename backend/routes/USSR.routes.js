const express = require('express');
const router = express.Router();
const USSRController = require('../controllers/USSR.controller');


router.get('/ussr', USSRController.getAll);

router.get('/ussr/:id', USSRController.getById);

module.exports = router;
