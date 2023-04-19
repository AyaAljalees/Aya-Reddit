// eslint-disable-next-line import/no-unresolved
const bcrybt = require('bcrybt');

const hashPassword = (userPassword, cb) => {
  bcrybt.hash(userPassword, 10, cb);
};
module.exports = hashPassword;
