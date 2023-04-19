const { Pool } = require('../../config/connection');

const comparePassword = (username) => {
  const sql = {
    query: 'SELECT password FROM users WHERE username =$1',
    value: [username],
  };
  return Pool.query(sql);
};

module.exports = comparePassword;
