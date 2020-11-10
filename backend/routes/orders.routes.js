const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/orders.controllers');

router.post('/cart', OrdersController.postNew);

module.exports = router;
