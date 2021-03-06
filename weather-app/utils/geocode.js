const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiaGFpZCIsImEiOiJjazViazJxcjIwajNyM29tbTUxaDE5Nnl6In0.pxhHBptolriNjktiDYF--w" 

    request({url: url, json: true}, (error, response) => {
        if (error){
            callback('unable connect', undefined)
        } else if(response.body.features.length === 0){
            callback('input error', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

// geocode(' ', (error, data) => {
//     console.log('eror', error)
//     console.log('data', data)
// })

module.exports = geocode