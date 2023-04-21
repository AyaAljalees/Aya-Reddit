const { join } = require('path');

const getLogin = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', 'frontend', 'html', 'login.html'),
  );
};
module.exports = { getLogin };
