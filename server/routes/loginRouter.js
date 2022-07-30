const loginRouter = require('express').Router()

loginRouter.get('/', (req, res) => {
  res.send('expense router get')
})

loginRouter.put('/', (req, res) => {
  res.send('expense router get')
})

loginRouter.post('/', (req, res) => {
  res.send('expense router get')
})

loginRouter.delete('/', (req, res) => {
  res.send('expense router get')
})


module.exports = loginRouter