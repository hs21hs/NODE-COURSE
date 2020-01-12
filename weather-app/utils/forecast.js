const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/a6d7ceec42798e9bf8bfd7b40e319489/"+latitude+","+longitude

    request({url: url, json: true}, (error, response) => {
        if (error){
            callback('unable connect', undefined)
        } else if(response.body.error){
            callback('input error', undefined)
        }else{
            callback(undefined, response.body.daily.data[0].summary)
        }
    })
}

module.exports = forecast