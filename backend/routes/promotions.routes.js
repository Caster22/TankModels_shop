const express = require('express');
const router = express.Router();
const PromotionsController = require('../controllers/promotions.controller');


router.get('/promotions', PromotionsController.getAll);

module.exports = router;

