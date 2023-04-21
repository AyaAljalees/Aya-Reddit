const connection = require('../../config/connection');

const getAllPosts = () => connection.query('SELECT users.username, posts.image_url, posts.title, posts.created_at FROM posts JOIN users ON posts.userId = users.id');

module.exports = { getAllPosts };
