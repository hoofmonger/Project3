const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const productSchema = new Schema({
  Name: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 20,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
  }
});

const Product = model('Product', productSchema);

module.exports = Product;
