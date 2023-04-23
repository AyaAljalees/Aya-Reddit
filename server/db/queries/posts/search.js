const connection = require('../../config/connection');

const searchPost = (searchKeyword) => {
  // const { searchTerm } = searchTrem;
  const sql = {

    text: 'SELECT users.username, posts.image_url, posts.title, posts.created_at FROM posts JOIN users ON posts.userId = users.id AND posts.title ILIKE $1',
    values: [`%${searchKeyword}%`],
  };

  return connection.query(sql);
};
module.exports = { searchPost };
