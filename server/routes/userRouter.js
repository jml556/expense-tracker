const userRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const SECRET = process.env.SECRET;

userRouter.get('/', async (req, res) => {
  const bearerToken = req.get('Authorization');

  if (!bearerToken)
    return res.status(400).json({ error: 'must include token' });
  const token = (() => bearerToken.split(' ')[1])();

  try {
    const isValidToken = jwt.verify(token, SECRET);
    const foundUser = await User.findOne({ _id: isValidToken.id });
    return res.status(200).json({
      username: foundUser.username,
      blogs: foundUser.blogs,
    });
  } catch (e) {
    res.status(400).send({
      error: 'Invalid Token',
    });
  }
});

userRouter.put('/', (req, res) => {
  res.send('expense router get');
});

userRouter.post('/', async (req, res) => {
  const { username, password } = req.body;

  const foundUser = await User.findOne({ username });

  if (!foundUser)
    return res.status(404).send({ error: 'Password or Username invalid' });
  const isValid = await bcrypt.compare(password, foundUser.hashedPassword);
  if (!isValid)
    return res.status(400).send({ error: 'Password or Username invalid' });
  const token = jwt.sign(
    {
      username: foundUser.username,
      id: foundUser._id,
    },
    SECRET,
    { expiresIn: '12h' },
  );

  return res.status(200).json({
    token,
    name: foundUser.name,
    username: foundUser.username,
  });
});

userRouter.delete('/', () => {
  res.send('expense router get');
});

module.exports = userRouter;
