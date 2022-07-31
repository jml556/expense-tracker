const loginRouter = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

loginRouter.post('/', async (req, res) => {
  const { username, name, password } = req.body;

  const foundUser = await User.findOne({ username });
  if (foundUser)
    return res.status(409).json({
      error: 'User already exists',
    });
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      username,
      name,
      hashedPassword: hashedPassword,
    });

    await newUser.save();
    return res.redirect(302, '/login');
  } catch (e) {
    return res.status(404).json(e);
  }
});

module.exports = loginRouter;
