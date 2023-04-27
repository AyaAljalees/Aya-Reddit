const { getAllCommentsQuery } = require('../../db/queries');

const getAllPostComments = (req, res) => {
  getAllCommentsQuery()
    .then((comments) => res.json(comments.rows))
    .then((comments) => {
      console.log(comments);
    })
    .catch(() => res.status(500).send('Internal Server Error'));
};
module.exports = { getAllPostComments };
