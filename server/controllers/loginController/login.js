/* eslint-disable no-shadow */
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { loginQuery } = require('../../db/queries');
const { loginSchema } = require('../../db/utilis/validation');
const { SECRET_KEY } = require('../../config');

const login = (req, res) => {
  const { username, password } = req.body;
  const { error } = loginSchema.validate({ username, password }, { abortEarly: false });

  if (error) {
    res.status(400).redirect('/login?error=check your username OR password');
  }
  loginQuery(username)
    // eslint-disable-next-line consistent-return
    .then((response) => {
      const user = response.rows[0];
      req.myToken = user;
      if (!response.rows.length) {
        res.status(400).send('you need to create a new account').redirect('/signup');
      } else {
        const { password: hashPassword } = response.rows[0];
        return bcrypt.compare(password, hashPassword);
      }
    }).then((result) => {
      const { id, username } = req.myToken;
      if (result) {
        sign(
          {
            id,
            username,

          },
          SECRET_KEY,
          (err, token) => {
            res.cookie('token', token);
            res.redirect('/post');
          },
        );
      } else {
        res.status(200).send('please enter correct password');
      }
    }).catch((err) => console.log(err));
};

module.exports = { login };
