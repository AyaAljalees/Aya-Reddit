const connection = require('../../config/connection');

const getAllCommentsQuery = (postId) => {
  const sql = {
    text: 'SELECT * FROM comments WHERE comments.posts_id = $1',
    values: [postId],
  };
  return connection.query(sql);
};
module.exports = { getAllCommentsQuery };
