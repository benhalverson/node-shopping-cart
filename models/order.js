const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// import User from './user';
const OrderSchema = new Schema({
  //user: [User],
  cart: Object,
  address: String,
  paymentId: String
});

var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
