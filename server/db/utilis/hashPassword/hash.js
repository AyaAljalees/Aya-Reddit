// eslint-disable-next-line import/no-unresolved
const bcrypt = require('bcrypt');

const hashPassword = (userPassword) => bcrypt.hash(userPassword, 10);

module.exports = hashPassword;
