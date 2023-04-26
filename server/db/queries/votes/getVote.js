const connection = require('../../config/connection');

const getVotesQuery = (postId) => {
  const sql = {
    text: 'SELECT COUNT(*) FROM votes WHERE posts_id = $1 AND vote_status = true',
    values: [postId],
  };
  return connection.query(sql)
    .then((result) => result.rows[0].count)
    .then((result) => {
      const sql2 = {
        text: 'SELECT COUNT(*) FROM votes WHERE posts_id = $1 AND vote_status = false',
        values: [postId],
      };
      return connection
        .query(sql2)
        .then((result2) => result2.rows[0].count)
        .then((result2) => result - result2)
        .catch((err) => {
          console.error(err);
          throw new Error('Error getting down votes count');
        });
    })
    .catch((err) => {
      console.error(err);

      throw new Error('Error getting up votes count');
    });
};
module.exports = { getVotesQuery };
