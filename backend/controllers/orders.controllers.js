const Order = require('../models/orders.model');
const sanitize = require('mongo-sanitize');




exports.postNew = async (req, res) => {
  console.log();
};


/*exports.postNew = async (req, res) => {
  //const { author, text } = req.body;
  const cleanAuth = sanitize(req.body.author);
  const cleanText = sanitize(req.body.text);

  try {
    const newTestimonial = new Testimonial({ author: cleanAuth, text: cleanText });
    await newTestimonial.save();
    res.json({ message: 'OK' });
  } catch(err) {
    res.status(500).json({ message: err });
  }
};*/
