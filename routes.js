const bodyParser = require('body-parser');
const mongoose = require('mongoose');








//Googel OAuth
app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/myrecipes',
    failureRedirect: '/'
  }));