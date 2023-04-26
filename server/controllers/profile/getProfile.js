// const { getUserProfile } = require('../../db/queries');
// const tokenUser = require('../../db/utilis/JWT/vToken');

// const getUserProf = (req, res) => {
//   const { token } = req.cookies;
//   tokenUser(token)
//     .then((user) => json.parse(user))
//     .then((user) => { console.log(user,"--------------------------") });
//   // getUserProfile()
//   //   .then((getUserProfileInfo) => res.json(getUserProfileInfo.rows))
//   //   .catch(() => res.status(500).send('Internal Server Error'));
// };
// module.exports = { getUserProf };
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
    .then((response) => {
      console.log(response.id);
      return response;
    })
    .then((result) => getUserProfile(result.id))
    .then((result) => res.json(result.rows))
    .catch((err) => res.json(err));
};

module.exports = { getUserPosts };
