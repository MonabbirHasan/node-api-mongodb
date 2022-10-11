const express = require('express')
const app = express()
const cors = require('cors')
const userRouter  = require('./routes/user.route')
require('./config/db')
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// all api
app.use('/api/user', userRouter)
// all api

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/./views/index.html')
})

app.use((req, res, next) => {
  res.status(404).json({ message: 'page and rout not valid' })
})
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'somthing went wrong in server' })
})

module.exports = app
