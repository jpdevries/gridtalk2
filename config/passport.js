const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//Load user model
const User = require('../models/user');
const configAuth = require('./config/auth');


module.exports = function(passport) {

	passport.serializeUser

	passport.deserializeUser

	//Local registration

		passport.use('local-signup', new LocalStrategy)

}