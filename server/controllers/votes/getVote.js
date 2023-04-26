const { getVotesQuery } = require('../../db/queries');

const getVotes = (req, res) => {
  const { posts_id } = req.params;
  getVotesQuery(posts_id)
    .then((result) => {
      console.log(result);
      return res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
module.exports = { getVotes };
