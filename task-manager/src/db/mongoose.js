const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const first = new Task ({
    description: 'first task',
    completed: false
})
first.save().then(() => {
console.log(first)
}).catch((error) => {
    console.log('Error!', error)
})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User ({
//     name: 'Andrew',
//     age: 27
// })
// me.save().then(() => {
// console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })