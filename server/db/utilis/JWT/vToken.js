const { verify } = require('jsonwebtoken');
const { SECRET_KEY } = require('../../../config');

const tokenUser = (token) => {
  const secret = SECRET_KEY;
  return new Promise((resolve, reject) => {
    verify(token, secret, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};

module.exports = tokenUser;
