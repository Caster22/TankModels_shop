const mongoose = require('mongoose');

const ussrSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Type: { type: String, required: true },
  Description: { type: String, required: true },
  Image: { type: String, required: true },
  PaperPrice: { type: String, required: true },
  PlasticPrice: { type: String, required: true },
  WoodPrice: { type: String, required: true },
  MetalPrice: { type: String, required: true },
});

module.exports = mongoose.model('USSR', ussrSchema);
