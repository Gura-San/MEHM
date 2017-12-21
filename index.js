const express = require('express')
const hbs = require('express-handlebars')
const feeds = require('./controller/controller')
var parser = require('body-parser')
var mongoose = require('./db/connection')
var port = 3002
var app = express()

// var Feed = mongoose.model('Feed')

app.set('port', process.env.PORT || 4000)

app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: 'views/',
    layoutDir: 'views/',
    defaultLayout: 'layout'
}))

app.use('/', feeds)
app.use('/question', feeds)

app.listen(port, () => {console.log(`listening on port ${port}`)})
app.use('/', express.static('public'))



