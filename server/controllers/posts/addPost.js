/* eslint-disable camelcase */
const { addPost } = require('../../db/queries');
const { postSchema } = require('../../db/utilis/validation');

const addPostFunction = (req, res) => {
  const { title, content, image_url } = req.body;
  const { error } = postSchema.validate({ title, image_url, content }, { abortEarly: false });
  if (error) {
    res.status(400).redirect('/addPost');
  }
  addPost(
    {
      title, content, image_url, userId: req.myToken.id,
    },
  )
    .then(
      () => {
        res.status(201).redirect('/');
      },
    )
    .catch((err) => {
      res.status(401).send(err);
    });
};
module.exports = { addPostFunction };
