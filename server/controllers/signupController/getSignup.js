const { join } = require('path');

const getSignup = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', 'frontend', 'html', 'signup.html'),
  );
};
module.exports = { getSignup };
