/* eslint-disable no-lonely-if */
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../config');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;
  return jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
    if (err) {
      res.status(404).json('you must be logged in');
    } else {
      if (decodedToken.userName) {
        req.myToken = decodedToken;
        next();
      } else {
        res.status(401).send('back to login');
      }
    }
  });
};
module.exports = checkAuth;
