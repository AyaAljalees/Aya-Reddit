/* eslint-disable no-shadow */
const connection = require('../../config/connection');

const addVotesQuery = (postId, userId, voteStatus) => {
  const sql1 = {
    text: 'SELECT * FROM posts WHERE id = $1',
    values: [postId],
  };
  return connection
    .query(sql1)
    .then((result) => {
      if (result.rows.length === 0) {
        throw new Error(`Post with id ${postId} does not exist`);
      } else {
        const sql2 = {
          text: 'SELECT * FROM votes WHERE posts_id = $1 AND userid = $2',
          values: [postId, userId],

        };
        return connection
          .query(sql2)
          .then((result) => {
            if (result.rows.length === 0) {
              const sql3 = {
                text: 'INSERT INTO votes (posts_id, userid, vote_status) VALUES ($1, $2, $3)',
                values: [postId, userId, voteStatus],
              };
              return connection
                .query(sql3)
                .then((result) => result.rows[0])
                .catch(() => {
                  throw new Error('Error adding vote');
                });
            }
            const sql4 = {
              text: 'UPDATE votes SET vote_status = $1 WHERE posts_id = $2 AND userid = $3',
              values: [voteStatus, postId, userId],
            };
            return connection
              .query(sql4)
              .then((result) => result.rows[0])
              .catch(() => {
                throw new Error('Error updating vote');
              });
          })
          .catch(() => {
            throw new Error('Error getting vote');
          });
      }
    })
    .catch(() => {
      throw new Error(`Error checking post with id ${postId}`);
    });
};
module.exports = { addVotesQuery };
