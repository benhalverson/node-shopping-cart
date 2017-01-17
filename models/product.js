const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  imageurl: String
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
// module.exports = mongoose.model('Product', Product);

// var M = mongoose.model('Person', schema);
// var m = new M({ name: 'Max Headroom' });
