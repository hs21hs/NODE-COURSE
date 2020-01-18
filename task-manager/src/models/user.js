const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0){
                throw new Error('Age must be positive')
            }
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }
})

// const me = new User ({
//     name: 'tike',
//     age: 20,
//     email: "gg"
// })
// me.save().then(() => {
// console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

module.exports = User