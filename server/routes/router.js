const express = require('express');

const router = express.Router();
const {
  login, signup, getLogin, getSignup, addPostFunction, addPage, getHomePage,
  search, checkAuth, getAllPost, logout,
} = require('../controllers');

router.get('/signup', getSignup);
router.post('/signup', signup);
router.get('/', getHomePage);
router.get('/post', getAllPost);
router.post('/search', search);
router.post('/login', login);
router.get('/login', getLogin);
router.post('/logout', logout);
router.use(checkAuth);
router.get('/addPost', addPage);
router.post('/addPost', addPostFunction);

module.exports = router;
