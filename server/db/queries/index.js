const { getAllPosts } = require('./posts/getAllPost');
const { addPost } = require('./posts/addPost');
const { deletePost } = require('./posts/deletePost');
const { addUser } = require('./users/addUser');
const { getPassword } = require('./users/getPassword');
const { checkUser } = require('./users/checkUser');

module.exports = {
  getAllPosts,
  addPost,
  deletePost,
  addUser,
  getPassword,
  checkUser,
};
