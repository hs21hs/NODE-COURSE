const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

// const first = new Task ({
//     description: 'first task',
//     completed: false
// })
// first.save().then(() => {
// console.log(first)
// }).catch((error) => {
//     console.log('Error!', error)
// })
module.exports = Task