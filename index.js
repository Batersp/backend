const express = require('express')
const users = require('./users-router')
const cors = require('cors')
const bodyParser = require('body-parser')

/*const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}*/


const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/*app.use('/users', users)*/

app.get('/tasks', (req, res) => {
    res.send("tasks")
})

app.use((req, res) => {
    res.send(404)
})

app.listen(1488)




