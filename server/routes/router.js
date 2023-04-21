const express = require('express');

const router = express.Router();
const {
  home, login, signup, getLogin, getSignup,
} = require('../controllers');

router.get('/login', getLogin);
router.post('/login', login);
router.get('/', home);
router.get('/signup', getSignup);
router.post('/signup', signup);
module.exports = router;
