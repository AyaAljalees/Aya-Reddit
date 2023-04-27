const { getAllCommentsQuery } = require('../../db/queries');

const getComments = (req, res) => {
  const { postId } = req.params;
  getAllCommentsQuery(postId)
    .then((result) => res.json(result.rows))
    .catch((err) => res.json(err));
};

module.exports = getComments;
