/* eslint-disable camelcase */
const { addPost } = require('../../db/queries/posts/addPost');

const addPostFunction = (req, res) => {
  const { title, content, image_url } = req.body;
  addPost(
    {
      title, content, image_url, userId: req.myToken.id,
    },
  )
    .then(
      (data) => {
        res.status(201).json(data.rows[0]);
      },
    )
    .catch((err) => {
      res.status(401).send(err);
    });
};
module.exports = { addPostFunction };
