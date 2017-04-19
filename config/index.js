var configValues = require('./config');//this gets the info from config.json file.

module.exports = {

	getDbConnectionString: function() {
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
		'@ds149030.mlab.com:49030/gridtalk';
	}
}