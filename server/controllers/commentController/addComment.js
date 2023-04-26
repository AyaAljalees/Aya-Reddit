/* eslint-disable camelcase */
const { addComment } = require('../../db/queries');

const addCommentFunction = (req, res) => {
  const { id } = req.myToken;
  const { content_comments, posts_id } = req.body;
  addComment(content_comments, id, posts_id)
    .then((result) => res.json(result.rows[0]))
    .catch((err) => res.json(err));
};
module.exports = { addCommentFunction };
