const { getAllPosts } = require('./posts/getAllPost');
const { addPost } = require('./posts/addPost');
const { deletePost } = require('./posts/deletePost');
const { addUser } = require('./users/addUser');
const { getPassword } = require('./users/getPassword');
const { loginQuery } = require('./login/loginQuery');
const { signupQuery } = require('./signup/signup');

module.exports = {
  getAllPosts,
  addPost,
  deletePost,
  addUser,
  getPassword,
  loginQuery,
  signupQuery,

};
