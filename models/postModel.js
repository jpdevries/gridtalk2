var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
	username: String,
	title: String,
	content: String,
	date: { type: Date, default: Date.now }
});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;