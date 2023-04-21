const { sign } = require('jsonwebtoken');
const { SECRET_KEY } = require('../../../config');

const signToken = (pyload) => new Promise((resolve, reject) => {
  sign(pyload, SECRET_KEY, (err, token) => {
    if (err) {
      reject(err);
    } else resolve(token);
  });
});

module.exports = signToken;
