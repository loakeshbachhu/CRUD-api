const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const url = 'mongodb://localhost/userDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
	console.log('Connected...')
})

app.use(express.json())

const robotsRouter = require('./routes/robots')
app.use('/robots',robotsRouter)

app.listen(9000,() => {
	console.log('Server Started...')
	
})