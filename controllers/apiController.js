var Post = require('../models/postModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.get('/api/post/:uname', function(req, res){
		Post.find({ username: req.params.uname}, function(err, post){
			if (err) throw err;

			res.send(post);
		});

	});

	app.get('/api/posts/:id', function(req, res) {
		Post.findById({ _id: req.params.id}, function(err, post){
			if(err) throw err;

			res.send(post);
		});
	});

	app.post('/api/post', function(req, res){
		if(req.body.id) {
			Post.findByIdAndUpdate(req.body.id, {
			username: req.body.username,
			content: req.body.content, title: req.body.title,
			date: { type: Date, default: Date.now }},
			function(err, post) {
				if(err) throw err;

				res.send('Success');
			});
			
		}
		else {
			var newPost = Post({
				username: 'snyper1',
				title: req.body.title,
				content: req.body.content,
			});
			newPost.save(function(err){
				if(err) throw err;
				res.send('Success');
			})
		}
	});

	app.delete('/api/post',function(req, res){
		Post.findByIdAndRemove(req.body.id, function(err) {
			if(err) throw err;
			res.send('Success');
		})
	});
}



