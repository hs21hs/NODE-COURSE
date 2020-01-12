const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
//app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    console.log("req.query")
    res.render('index',{title: "weather app"})
})
app.get('/about', (req, res)=>{
    console.log(req.query)
    res.render('about',{title: "weather app"}) 
})

// app.com 
//app.om/help
//app.com/about

app.get('/hey',(req, res)=>{
    res.send("k")
})

app.listen(3000, ()=>{
    console.log('listening')
})
