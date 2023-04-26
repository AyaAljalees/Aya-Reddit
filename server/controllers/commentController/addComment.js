/* eslint-disable camelcase */
const { addComment } = require('../../db/queries');

const addCommentFunction = (req, res) => {
  const { content_comments, userId, posts_id } = req.body;
  console.log({ content_comments, userId, posts_id });
  addComment(content_comments, userId, posts_id)
    .then((result) => res.json(result.rows[0]))
    .catch((err) => res.json(err));
};
module.exports = { addCommentFunction };
