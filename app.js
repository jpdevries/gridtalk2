var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var passport = require('passport');

var port = process.env.PORT || 3000;

//static folder for the files that are not changing dynamically (html,css)
app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//this line we are fetching the url, username and password to connect to mlab database.
mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);

app.listen(port);
