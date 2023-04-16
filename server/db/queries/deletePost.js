const { pool } = require('../config/connection');

const deletePost = (id, userId) => pool.query('DELETE FROM posts WHERE id = $1 And userId = ($2,1) RETURNING *', [id, userId]);

module.exports = { deletePost };
