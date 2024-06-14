const verifyGoogleToken = require('../utils/verifyGoogleToken');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.verifyGoogleAuth = async (req, res) => {
  try {
    const { token } = req.body;
    const payload = await verifyGoogleToken(token);

    let user = await User.findOne({ googleId: payload.sub });
    if (!user) {
      user = new User({
        googleId: payload.sub,
        displayName: payload.name,
        email: payload.email,
      });
      await user.save();
    }

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Login failed' });
      }

      const jwtToken = jwt.sign(user.toJSON(), process.env.JWT_SECRET_KEY);

      return res.status(200).json({ message: 'Login successful', token: jwtToken });
    });

  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};