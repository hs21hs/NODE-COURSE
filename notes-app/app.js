const getNotes = require('./notes.js')
const validator = require('validator')
console.log(getNotes())
console.log(validator.isEmail('hh@hotmail.com'))

// class Wok {

//     constructor(){
//         this.x=6
//         this.add = ()=>{ return this.x+5}
//         this.multiply = function m() {
//             return this.x *2
//         }
//     }

//     minus(){return this.x-5}
// }

// const obj = {
//     x: 3,
//     y: 2,
//     // //sum: ()=>{return this.x+this.y}
//     sum: function(){return this.x+this.y},
//     minus: function f() {return this.x-this.y}
// }

// const f = new Wok
// console.log(obj.minus())