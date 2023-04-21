/* eslint-disable camelcase */
const connection = require('../../config/connection');

const addPost = (
  {
    title, content, image_url, userId,
  // eslint-disable-next-line comma-dangle
  }
) => connection.query('INSERT INTO post (title,content,image_url,userId) VALUES ($1, $2, $3, $4)  RETURNING *', [title, content, image_url, userId]);
module.exports = { addPost };
