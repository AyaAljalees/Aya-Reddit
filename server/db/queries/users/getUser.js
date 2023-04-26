const connection = require('../../config/connection');

const getUserProfile = (userId) => {
  const sql = {
    text: 'SELECT users.username, users.email,created_at, users.id FROM users WHERE users.id= $1',
    values: [userId],
  };
  return connection.query(sql);
};
module.exports = { getUserProfile };
