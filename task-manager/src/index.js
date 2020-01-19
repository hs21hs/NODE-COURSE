const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const User = require('./models/user')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3000

//this parses request bodies to json
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('server is up on port' + port)
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

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//     console.log(isMatch)
// }

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse')
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}


myFunction()