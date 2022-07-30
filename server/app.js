const express = require('express')
const cors = require('cors')
const expenseRouter = require('./routes/expenseRouter')
const loginRouter = require('./routes/loginRouter')
const userRouter = require('./routes/userRouter')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('THIS IS THE BASE ROUTE')
})

app.use('/api/login', loginRouter)
app.use('/api/users', userRouter)
app.use('/api/expenses', expenseRouter)

module.exports = app