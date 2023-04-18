const { getAllPosts } = require('./posts/getAllPost');
const { addPost } = require('./posts/addPost');
const { deletePost } = require('./posts/deletePost');

module.exports = {
  getAllPosts,
  addPost,
  deletePost,
};
