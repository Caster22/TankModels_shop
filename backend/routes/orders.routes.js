const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/orders.controllers');

router.get('/cart', OrdersController.getAll);

router.post('/cart', OrdersController.postNew);

module.exports = router;
