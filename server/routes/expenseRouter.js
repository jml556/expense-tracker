const expenseRouter = require('express').Router()
const Expense = require('../models/Expense')

expenseRouter.get('/', (req, res) => {
  res.send('expense router get')
})

expenseRouter.put('/', (req, res) => {
  res.send('expense router get')
})

expenseRouter.post('/', (req, res) => {
  const {title, amount} = req.body
  return;
})

expenseRouter.delete('/', (req, res) => {
  res.send('expense router get')
})


module.exports = expenseRouter