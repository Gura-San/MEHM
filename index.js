const express = require('express')
const hbs = require('express-handlebars')
var parser = require('body-parser')
var mongoose = require('mongoose')

var app = express()

app.set("port", process.env.PORT || 4000)

app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: 'views/',
    layoutDir: 'views/',
    defaultLayout: 'layout'
}))

app.use(express.static(__dirname + '/public'))

app.get('/', ( req, res) => {
	ress.send('hello stack')
})
