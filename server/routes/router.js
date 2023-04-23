const express = require('express');
const { join } = require('path');

const router = express.Router();
const {
  mainPage, login, signup, getLogin, getSignup, addPostFunction, addPage, getHomePage,
  search, checkAuth,
} = require('../controllers');

router.get('/login', getLogin);
router.post('/login', login);
router.get('/', mainPage);
router.get('/signup', getSignup);
router.post('/signup', signup);
// router.get('/getPost', getPosts);
router.get('/getHomePage', getHomePage);
router.get('/post', addPage);
router.use(checkAuth);
router.post('/post', addPostFunction);
router.post('/search', search);

module.exports = router;
