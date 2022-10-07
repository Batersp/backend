const express = require('express')
const users = require('./users-router')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/users', users)

app.get('/tasks', async (req, res) => {
    res.send("tasks")
})

app.use((req, res) => {
    res.send(404)
})

app.listen(1488)




