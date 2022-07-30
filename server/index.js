require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')
const {PORT, MONGO_DB_URL} = process.env

mongoose.connect(MONGO_DB_URL, () => {
  console.log('succesffuly connceted to MongoDB')
})

app.listen(PORT, () => {
  console.log('server listening on ' + PORT)
})