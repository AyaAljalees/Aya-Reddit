const { signupSchema } = require('../../db/utilis/validation');
const hashPassword = require('../../db/utilis/hashPassword/hash');
const { signupQuery } = require('../../db/queries');
const signToken = require('../../db/utilis/JWT/signToken');

const signup = (req, res) => {
  const { username, password, email } = req.body;
  // eslint-disable-next-line no-unused-vars
  const { error } = signupSchema.validateAsync({ username, password, email }, { abortEarly: true })
    .then(() => hashPassword(password))
    .then((hash) => ({ username, email, password: hash }))
    .then((data) => signupQuery(data))
    .then((data) => data.rows[0])
    .then((row) => signToken(row))
    .then((token) => res.cookie('token', token).redirect('/'))
    .catch((err) => console.log(err));
};
module.exports = signup;
