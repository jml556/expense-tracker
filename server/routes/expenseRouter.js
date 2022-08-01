const expenseRouter = require('express').Router();
const Expense = require('../models/Expense');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const User = require('../models/User');

expenseRouter.get('/', async (req, res) => {
  const bearerToken = req.get('Authorization');

  if (!bearerToken)
    return res.status(400).json({ error: 'must include token' });
  const token = (() => bearerToken.split(' ')[1])();

  try {
    const isValidToken = jwt.verify(token, SECRET);
    if (!isValidToken) return res.status(400).json({ error: 'Token invalid' });

    const foundUser = await User.findById(isValidToken.id);
    const populatedUser = await User.findById(foundUser._id).populate(
      'expenses',
    );
    return res.status(200).json(populatedUser.expenses);
  } catch (e) {
    return res.json(e);
  }
});

expenseRouter.put('/', async (req, res) => {
  const { title, amount, category, date, description } = req.body;
  const bearerToken = req.get('Authorization');

  if (!bearerToken)
    return res.status(400).json({ error: 'must include token' });

  const token = (() => bearerToken.split(' ')[1])();

  try {
    const isValidToken = jwt.verify(token, SECRET);

    if (!isValidToken) return res.status(400).json({ error: 'Token invalid' });

    const foundUser = await User.findById(isValidToken.id);
    const newExpense = Expense({
      title,
      amount,
      category,
      date,
      description,
    });
    foundUser.expenses = foundUser.expenses.concat(newExpense._id);

    await foundUser.save();
    await newExpense.save();
    return res.status(200).json({
      message: 'succesfully stored expense',
    });
  } catch (e) {
    return res.json(e);
  }
});

expenseRouter.post('/', async (req, res) => {
  const { title, amount, category, date, description } = req.body;
  const bearerToken = req.get('Authorization');

  if (!bearerToken)
    return res.status(400).json({ error: 'must include token' });

  const token = (() => bearerToken.split(' ')[1])();

  try {
    const isValidToken = jwt.verify(token, SECRET);

    if (!isValidToken) return res.status(400).json({ error: 'Token invalid' });

    const foundUser = await User.findById(isValidToken.id);
    const newExpense = Expense({
      title,
      amount,
      category,
      date,
      description,
    });
    foundUser.expenses = foundUser.expenses.concat(newExpense._id);

    await foundUser.save();
    await newExpense.save();
    return res.status(200).json({
      message: 'succesfully stored expense',
    });
  } catch (e) {
    return res.json(e);
  }
});

expenseRouter.delete('/', (req, res) => {
  res.send('expense router get');
});

module.exports = expenseRouter;
