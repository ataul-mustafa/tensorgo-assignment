const express = require('express');
const passport = require('passport');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const cors = require('cors');
require('./utils/googleOAuth');

const app = express();

// Enable CORS for specific routes
const allowedOrigins = ['http://localhost:5173', 'https://quizzie-ataul.netlify.app', 'http://127.0.0.1:5173', 'http://localhost:3000', 'http://127.0.0.1:3000'];

const corsOptions = {
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/', feedbackRoutes);

module.exports = app;