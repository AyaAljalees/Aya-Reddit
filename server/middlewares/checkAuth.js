/* eslint-disable no-lonely-if */
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
    if (err) {
      res.status(404).json('you must be logged in');
    } else {
      if (token) {
        req.myToken = decodedToken;
        next();
      } else {
        res.status(401).json('back to login');
      }
    }
  });
};
module.exports = checkAuth;
