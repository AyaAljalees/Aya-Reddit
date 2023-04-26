const { getVotesQuery } = require('../../db/queries');

const getVotes = (req, res) => {
  const { posts_id } = req.params;
  getVotesQuery(posts_id)
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      res.status(500).json(err);
    });
};
module.exports = { getVotes };
