const { join } = require('path');

const getHomePage = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', 'frontend', 'html', 'index.html'),
  );
};
module.exports = { getHomePage };
