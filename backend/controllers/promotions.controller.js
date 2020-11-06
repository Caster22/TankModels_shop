const Promotion = require('../models/promotions.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Promotion.find()
      .populate('country'));
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};
