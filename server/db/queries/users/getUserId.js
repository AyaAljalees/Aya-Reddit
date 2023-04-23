const connection = require('../../config/connection');

const getId = (username) => {
  const sql = {
    query: 'SELECT id FROM users WHERE username = $1',
    value: [username],
  };
  return connection.query(sql);
};
module.exports = getId;
