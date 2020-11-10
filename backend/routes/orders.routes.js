const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/orders.controller');

router.post('/cart', OrdersController.postNew);

module.exports = router;
