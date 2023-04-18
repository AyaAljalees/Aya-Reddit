const { pool } = require('../../config/connection');

const deletePost = (id) => pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);

module.exports = { deletePost };
