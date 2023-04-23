const { join } = require('path');

const addPage = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', 'frontend', 'html', 'post.html'),
  );
};
module.exports = { addPage };
