const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const router = new express.Router();
const passport = require('passport');

router.post('/register', (req, res, next) => {
	

const validationResult = validateRegistrationForm(req.body);
	if(!validationResult.success) {
		return res.status(400).json({
     	success: false,
      // message: validationResult.message,
      // errors: validationResult.errors,
    	});
	}
	
	console.log("Registration successful");

	return passport.authenticate('local-signup', (err) => {
    if (err) {
      // 11000 Mongo code is for duplicate email error
      if (err.name === 'MongoError' && err.code === 11000) {
        // 409 HTTP status for conflict error
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors.',
          errors: {
            email: 'This email is already taken.',
          },
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully registered! Now you should be able to log in.',
    });
  })(req, res, next);

})

function validateRegistrationForm(payload){
	return{success:true};
}





//Google OAuth
router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/myrecipes',
    failureRedirect: '/'
  }));


module.exports = router;