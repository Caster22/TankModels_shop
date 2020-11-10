const Order = require('../models/orders.model');
const sanitize = require('mongo-sanitize');


exports.getAll = async (req, res) => {
  try {
    res.json(await Order.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.postNew = async (req, res) => {
  try {
    const bodySanitize = sanitize(req.body);
    const { name, address, email, phone, question, shipping } = bodySanitize;

    const newOrder = new Order(
      [
        {
          name: name,
          address: address,
          email: email,
          phone: phone,
          question: question,
          shipping: shipping,
        }
      ]
    );

    await newOrder.save();
    res.json({ message: 'OK' })

  } catch (err) {
    res.status(500).json(err);
  }
};
