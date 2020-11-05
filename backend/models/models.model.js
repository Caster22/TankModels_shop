const mongoose = require('mongoose');

const modelsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  paperPrice: { type: String, required: true },
  plasticPrice: { type: String, required: true },
  woodPrice: { type: String, required: true },
  metalPrice: { type: String, required: true },
  country: { type: String, required: true, ref: 'Country' },
});

module.exports = mongoose.model('Model', modelsSchema);
