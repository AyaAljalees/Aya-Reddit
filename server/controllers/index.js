const { home } = require('./homeController/home');
const { login } = require('./loginController/login');
const { logout } = require('./logoutController/logout');
const signup = require('./signupController/signup');
const { getLogin } = require('./loginController/getLogin');
const { getSignup } = require('./signupController/getSignup');

module.exports = {
  home,
  login,
  logout,
  signup,
  getLogin,
  getSignup,
};
