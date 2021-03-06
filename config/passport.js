const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//Load user model
const User = require('../models/user');

//Load auth variables
const configAuth = require('./config/auth');


module.exports = function(passport) {

	//Session setup

	passport.serializeUser((user, done) => {
	    var user = {_id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email}
	    done(null, user);
  	});

	passport.deserializeUser((id, done) => {
	   User.findById(id, (err, user) => {
	   	done(err, user);
	   }); 
	});

	//Local registration

	passport.use('local-signup', new LocalStrategy({
	    usernameField: 'email',
	    passwordField: 'password',
	    passReqToCallback: true
	},
	  function(req, email, password, done) {
	    process.nextTick(function() {
	      User.findOne({'email': email}, (err, user) => {
	        if (err) {
	          return done(err);
	        }
	        if (user) {
	          return done(null, false, req.flash('registrationMessage', 'That email is already taken.'));
	        } else if (!(password === req.body['user-confirm-password'])) {
	          return done(null, false, req.flash('registrationMessage', 'Passwords do not match.'))
	        } else {
	          const newUser = new User();
	          newUser.email = email;
	          newUser.password = newUser.hashPassword(password);
	          newUser.firstName = req.body.firstName;
	          newUser.lastName = req.body.lastName;
	          newUser.save(err => {
	            if (err) {
	              throw err;
	            }
	            return done(null, newUser);
	          });
	        }
	      });
	    });
	  }));



	//Local Login

	  passport.use('local-login', new LocalStrategy({
	    usernameField: 'email',
	    passwordField: 'password',
	    passReqToCallback: true
	  },
	  function(req, email, password, done) {
	    User.findOne({'email' : email}, function(err, user) {
	      if (err) {
	        return done(err);
	      }
	      if (!user) {
	        return done(null, false, req.flash('loginMessage', 'No user found.'));
	      }
	      if (!user.validPassword(password)) {
	        return done(null, false, req.flash('loginMessage', 'Oops! Password is incorrect.'));
	      }
	      return done(null, user);
	    });
	  }));














}