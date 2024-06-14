const express = require('express');
const {submitFeedback, getFeedback} = require('../controllers/feedbackController');
const passport = require('passport');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');

router.post('/feedback', 
    ensureAuth,
    submitFeedback);

router.get('/feedback', 
    ensureAuth,
    getFeedback);

module.exports = router;