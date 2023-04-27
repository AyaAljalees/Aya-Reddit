const { addVotesQuery } = require('../../db/queries');

const addVotes = (req, res) => {
  const { id } = req.myToken;
  const { posts_id, voteStatus } = req.body;
  addVotesQuery(+posts_id, +id, voteStatus)
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      res.status(500).json(err);
    });
};
module.exports = { addVotes };
