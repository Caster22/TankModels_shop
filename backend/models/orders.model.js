const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  address: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  order: { type: Object, required: true },
  phone: { type: Number, required: true },
  question: { type: String, required: false },
  shipping: { type: String, required: true },
});

module.exports = mongoose.model('Order', ordersSchema);
