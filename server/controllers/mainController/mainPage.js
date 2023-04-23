const { join } = require('path');

const mainPage = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', 'frontend', 'index.html'),
  );
};
const getHomePage = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', 'frontend', 'html', 'home.html'),
  );
};
module.exports = { mainPage, getHomePage };
