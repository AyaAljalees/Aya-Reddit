const connection = require('../../config/connection');

function searchPost(searchTrem) {
  const { searchTerm } = searchTrem;
  return connection.query('SELECT * FROM posts WHERE title ILIKE $1', [`%${searchTerm}%`]);
}
module.exports = { searchPost };
