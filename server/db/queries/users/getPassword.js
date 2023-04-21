const connection = require('../../config/connection');

const comparePassword = (username) => {
  const sql = {
    query: 'SELECT password FROM users WHERE username =$1',
    value: [username],
  };
  return connection.query(sql);
};

module.exports = comparePassword;
