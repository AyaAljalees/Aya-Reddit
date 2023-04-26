const express = require('express');

const router = express.Router();
const {
  login, signup, getLogin, getSignup, addPostFunction, addPage, getHomePage,
  search, checkAuth, getAllPost, logout, addCommentFunction, getVotes, addVotes, getUserPosts,
  userProfilePage,
} = require('../controllers');

router.get('/signup', getSignup);
router.post('/signup', signup);
router.get('/', getHomePage);
router.get('/post', getAllPost);
router.post('/search', search);
router.post('/login', login);
router.get('/login', getLogin);
router.post('/logout', logout);
router.get('/getVotes', getVotes);
router.post('/addVote', addVotes);
router.use(checkAuth);
router.get('/profilea', getUserPosts);
router.post('/addComment', addCommentFunction);
router.get('/addPost', addPage);
router.post('/addPost', addPostFunction);

module.exports = router;
