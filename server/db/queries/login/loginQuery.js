const connection = require('../../config/connection');

const loginQuery = (username) => {
  const sql = {
    text: 'SELECT * FROM users WHERE username = $1',
    values: [username],
  };
  return connection.query(sql);
};
module.exports = { loginQuery };
