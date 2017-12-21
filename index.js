const express = require('express')
const hbs = require('express-handlebars')
var parser = require('body-parser')
var mongoose = require('mongoose')
var port = 3002
var app = express()


app.set ('port', process.env.PORT || 3003)
app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: 'views/',
    layoutDir: 'views/',
    defaultLayout: 'layout'
}))


app.listen(port, () => {console.log(`listening on port ${port}`)})
app.use('/feed', express.static('public'))
