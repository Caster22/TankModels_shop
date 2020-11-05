const Model = require('../models/models.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Model.find()
      .populate('country')
      .select('name image paperPrice metalPrice country'));
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const con = await Model.findById(req.params.id);
    if (!con) res.status(404).json({ message: 'Not found' });
    else res.json(con);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
