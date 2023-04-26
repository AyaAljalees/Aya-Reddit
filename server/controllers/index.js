const { mainPage, getHomePage } = require('./mainController/mainPage');
const { login } = require('./loginController/login');
const logout = require('./logoutController/logout');
const signup = require('./signupController/signup');
const { getLogin } = require('./loginController/getLogin');
const { getSignup } = require('./signupController/getSignup');
const { addPostFunction } = require('./posts/addPost');
const { getAllPost } = require('./posts/getAllPost');
const { search } = require('./posts/searchPost');
const { addPage } = require('./posts/addPostPage');
const checkAuth = require('../middlewares/checkAuth');
const { addCommentFunction } = require('./commentController/addComment');

module.exports = {
  mainPage,
  login,
  logout,
  signup,
  getLogin,
  getSignup,
  addPostFunction,
  getAllPost,
  search,
  checkAuth,
  getHomePage,
  addPage,
  addCommentFunction,
};
