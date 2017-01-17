import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let PoductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  imageurl: String
});

modeule.exports = mongoose.model('Product', ProductSchema);
