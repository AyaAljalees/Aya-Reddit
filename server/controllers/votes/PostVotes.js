const { addVotesQuery } = require('../../db/queries');

const addVotes = (req, res) => {
  const { posts_id, userId, voteStatus } = req.body;
  addVotesQuery(+posts_id, +userId, voteStatus)
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      res.status(500).json(err);
    });
};
module.exports = { addVotes };
