const express = require('express');
const router = express.Router();
const UssrModelController = require('../controllers/ussrModels.controller');


router.get('/ussrModels', UssrModelController.getAll);

router.get('/ussrModels/:id', UssrModelController.getById);

module.exports = router;
