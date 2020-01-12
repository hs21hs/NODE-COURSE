const request = require('request')

const url = "https://api.darksky.net/forecast/a6d7ceec42798e9bf8bfd7b40e319489/37.8267,-122.4233"

request({url:url},(error, response)=>{
    const data = JSON.parse(response.body)
    console.log(data.currently)
})