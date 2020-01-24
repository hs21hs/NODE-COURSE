const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
const {MongoClient, ObjectID} = mongodb

const connectionURL = process.env.MONGODB_URL
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useUnifiedTopology: true}, (error, client) => {
    if (error){
        return console.log('Unable to connect')
    }

    const db = client.db(databaseName)

 db.collection('users').deleteMany({ name: 'haider'}).then((result) => {
        console.log('sucess', result)
    }).catch((error) => {
        console.log("error", error)
    })
    
}) 
       


    // //"you can aalso chain .then directly. no need for const" 
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5e21d2d18e57cb4010f91c90")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     },
    //     $inc: {
    //         age: 1
    //     }
    // }
    // )
    // updatePromise.then((result) => {
    //     console.log('sucess', result)
    // }).catch((error) => {
    //     console.log("error", error)
    // })
    //   })



    // db.collection('users').find({ name: 'haider'}).toArray((error,users) =>{
    //     if (error) {
    //         return console.log('unable fetch')
    //     }
    //     console.log(users)
    // }
    // )
    // })

   // //{ _id: new ObjectID("5e21d2d18e57cb4010f91c90")}
// db.collection('users').findOne({ name: 'haider'},
// (error,user) =>{
//     if (error) {
//         return console.log('unable fetch')
//     }
//     console.log(user)
// }
// )
// })

//     db.collection('users').insertOne({
//         name: 'haider',
//         age: 24
//     })

//     db.collection('users').insertMany([
//     {
//         name: 'haider',
//         age: 24
//     },
//     {
//         name: 'shoul',
//         age: 25
//     }
//     ], (error, result) => {
//         if (error) {
//             return console.log("errror")
//         }
//         console.log(result.ops)
//     })
// })
// //useNewUrlParser: true




