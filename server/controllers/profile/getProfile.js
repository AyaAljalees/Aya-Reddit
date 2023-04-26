const { getUserProfile } = require('../../db/queries');
const tokenUser = require('../../db/utilis/JWT/vToken');

const getUserPosts = (req, res) => {
  const userId = req.cookies.token;
  tokenUser(userId)
    .then((user) => {
      if (!user) {
        res.status(300).redirect('/signup');
      }
      return user;
    })
    .then((response) => response)
    .then((result) => getUserProfile(result.id))
    .then((result) => res.json(result.rows))
    .catch((err) => res.json(err));
};

module.exports = { getUserPosts };
