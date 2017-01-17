// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt-nodejs');
// const Schema = mongoose.Schema;
//
// const userSchema = new Schema({
//   email: String, required: true,
//   password: {type: Object, required: true},
// });
//
// var User = mongoose.model('Order', userSchema);
//
// userSchema.methods.encryptPassword = (password) => {
//   return bcrypt.hashSync(password, bcyrpt.genSaltSync(5), null);
// };
//
// userSchema.method.validPassword = (password) => {
//   return bcrypt.compareSync(password, this.password);
// };
//
// module.exports = User;
