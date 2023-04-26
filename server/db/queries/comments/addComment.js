const connection = require('../../config/connection');

const addComment = (content, userId, postId) => {
  const sql = {
    text: 'INSERT INTO comments (content_comments, userId, posts_id) VALUES ($1, $2, $3)',
    values: [content, userId, postId],
  };
  return connection.query(sql);
};

module.exports = { addComment };
