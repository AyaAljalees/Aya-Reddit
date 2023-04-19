const { Pool } = require('../../config/connection');

const checkUser = (userName) => {
  const sql = {
    query: 'SELECT username FROM users WHERE usernames= $1',
    value: [userName],
  };
  return Pool.query(sql);
};
module.exports = { checkUser };
