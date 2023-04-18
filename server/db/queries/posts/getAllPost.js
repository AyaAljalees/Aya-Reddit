const { pool } = require('../../config/connection');

const getAllPosts = () => pool.query('SELECT users.username, posts.image_url, posts.title, posts.created_at FROM posts JOIN users ON posts.userId = users.id');

module.exports = { getAllPosts };
