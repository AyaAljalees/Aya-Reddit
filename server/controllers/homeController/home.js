const { join } = require('path');

const home = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', 'frontend', 'index.html'),
  );
};
module.exports = { home };
