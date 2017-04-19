var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var userRegSchema = new Schema({
	username: String,
	firstName: String,
	lastName: String,
	email: String
});









userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.hashPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
};



const User = mongoose.model('User', userRegSchema);

module.exports = User;