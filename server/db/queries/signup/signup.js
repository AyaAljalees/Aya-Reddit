const connection = require('../../config/connection');

const signupQuery = ({ email, password, username }) => {
  const sql = {
    text: 'INSERT INTO users (email, password, username) VALUES($1,$2,$3) RETURNING email ,username ,id',
    values: [email, password, username],
  };
  return connection.query(sql);
};
module.exports = { signupQuery };
