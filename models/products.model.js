var mongoose = require('mongoose');

var ProductsSchema = new mongoose.Schema({
  name: String,
  email: String,
  description:String,
  price: Number,
  quantity: Number,
  category:{
    type: String,
    enum:['Men', 'Women', 'Teens']
  }
});

module.exports = mongoose.model('Products', ProductsSchema)