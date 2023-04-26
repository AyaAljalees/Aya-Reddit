const connection = require('../../config/connection');

const getAllCommentsQuery = (postId) => {
  const sql = {
    text: 'SELECT * FROM comments WHERE post_id = $1',
    values: [postId],
  };
  return connection.query(sql);
};
module.exports = { getAllCommentsQuery };
