const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


geocode('Boston', (error, data) => {
    console.log('eror', error)
    console.log('data', data)
})

forecast(-75.7088, 44.15455, (error, data) => {
    console.log('eror', error)
    console.log('data', data)
})


//pk.eyJ1IjoiaGFpZCIsImEiOiJjazViazJxcjIwajNyM29tbTUxaDE5Nnl6In0.pxhHBptolriNjktiDYF--w


