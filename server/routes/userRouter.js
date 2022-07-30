const userRouter = require('express').Router()

userRouter.get('/', (req, res) => {
  console.log('req')
  res.send('expense router get')
})

userRouter.put('/', (req, res) => {
  res.send('expense router get')
})

userRouter.post('/', () => {
  res.send('expense router get')
})

userRouter.delete('/', () => {
  res.send('expense router get')
})


module.exports = userRouter