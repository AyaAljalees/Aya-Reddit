const { getAllPosts } = require('../../db/queries');

const getAllPost = (req, res) => {
  getAllPosts()
    .then((result) => res.json(result.rows))
    .catch(() => res.status(500).send('Internal Server Error'));
};

module.exports = { getAllPost };
