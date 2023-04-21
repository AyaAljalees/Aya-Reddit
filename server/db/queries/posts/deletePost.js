const connection = require('../../config/connection');

const deletePost = (id) => connection.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);

module.exports = { deletePost };
