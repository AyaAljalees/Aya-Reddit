const connection = require('../../config/connection');
const { hashPassword } = require('../../utilis/hashPassword/hash');

const addUser = (userInfo) => {
  const { userName, password, email } = userInfo;
  // eslint-disable-next-line consistent-return
  hashPassword(password, (err, hash) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } else {
      const sql = {
        query: 'INSERT INTO users (userName, password, email) VALUES ($1,$2,$3) RETURNING *',
        values: [userName, hash, email],
      };
      return connection.query(sql);
    }
  });
};
module.exports = addUser;
