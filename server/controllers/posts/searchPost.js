const { searchPost } = require('../../db/queries/posts/search');

const search = (req, res) => {
  searchPost(req.body)
    .then((data) => {
      res.json(data.rows);
    })
    .catch(() => res.status(500).send('Internal Server Error'));
};
module.exports = { search };
