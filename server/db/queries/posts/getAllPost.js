const connection = require('../../config/connection');

const getAllPosts = () => {
  const sql = {
    text: 'SELECT posts.id, posts.userId, posts.content, users.username, posts.image_url, posts.title, posts.created_at FROM posts JOIN users ON posts.userId = users.id',
  };
  return connection.query(sql);
};
module.exports = { getAllPosts };
