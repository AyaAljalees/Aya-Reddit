const { join } = require('path');

const getHomePage = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', 'frontend', 'html', 'home.html'),
  );
};
module.exports = { getHomePage };
