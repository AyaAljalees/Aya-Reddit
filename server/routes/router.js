const express = require('express');
const { join } = require('path');

const router = express.Router();
const {
  login, signup, getLogin, getSignup, addPostFunction, addPage, getHomePage,
  search, checkAuth, getAllPost,
} = require('../controllers');

router.get('/login', getLogin);
router.post('/login', login);

router.get('/signup', getSignup);
router.post('/signup', signup);
router.get('/getHomePage', getHomePage);
router.get('/addPost', addPage);
router.get('/post', getAllPost);
router.post('/search', search);
router.use(checkAuth);
router.post('/addPost', addPostFunction);

module.exports = router;
