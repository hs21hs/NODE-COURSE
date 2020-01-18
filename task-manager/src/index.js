const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3000

//this parses request bodies to json
app.use(express.json())

app.listen(port, () => {
    console.log('server is up on port' + port)
})

app.post('/users', (req,res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
        }).catch((error) => {
            res.status(400).send(error)
        }) 
})

app.post('/tasks', (req,res) => {
    console.log(req.body)
    const task = new Task(req.body)
    task.save().then(() => {
        res.send(task)
        }).catch((error) => {
            res.status(400).send(error)
        }) 
})