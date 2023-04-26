const { getAllPosts } = require('./posts/getAllPost');
const { addPost } = require('./posts/addPost');
const { deletePost } = require('./posts/deletePost');
const { searchPost } = require('./posts/search');
const { addUser } = require('./users/addUser');
const { getPassword } = require('./users/getPassword');
const { getUserProfile } = require('./users/getUser');
const { loginQuery } = require('./login/loginQuery');
const { signupQuery } = require('./signup/signup');
const { getAllCommentsQuery } = require('./comments/getAllComments');
const { addComment } = require('./comments/addComment');
const { getVotesQuery } = require('./votes/getVote');
const { addVotesQuery } = require('./votes/postVote');

module.exports = {
  getAllPosts,
  addPost,
  deletePost,
  addUser,
  getPassword,
  loginQuery,
  signupQuery,
  getAllCommentsQuery,
  searchPost,
  addComment,
  getVotesQuery,
  addVotesQuery,
  getUserProfile,

};
