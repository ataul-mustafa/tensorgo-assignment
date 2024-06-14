const express = require('express');
const passport = require('passport');
const router = express.Router();
const {verifyGoogleAuth} = require('../controllers/googleAuthController')

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.post('/google/callback', verifyGoogleAuth);

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;