const express = require('express');
const router = express.Router();
const passport = require('passport');

const {registerUser,
       loginUser,
       getProfile} = require('../controllers/userController');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/me', passport.authenticate('jwt', {session: false}), getProfile);

module.exports = router;