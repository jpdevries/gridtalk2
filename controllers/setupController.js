var Post = require('../models/postModel');

module.exports = function(app) {

	app.get('/api/setupPosts', function(req, res) {

		//seed database
		var starterPosts = [
			{
				username: 'snyper1',
				title: 'This is the first test',
				content: 'Hello I am dummy data 1'
			},
			{
				username: 'snyper2',
				title: 'This is the second test',
				content: 'Hello I am dummy data 2'
			},
			{
				username: 'snyper3',
				title: 'This is the third test',
				content: 'Hello I am dummy data 3'
			},
		];

		Post.create(starterPosts, function(err, results) {
			res.send(results);
		});
	});
}