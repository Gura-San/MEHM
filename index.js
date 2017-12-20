const express = require('express')
const hbs = require('hbs')
var parser = require('body-parser')
var mongoose = require('mongoose')

var app = express()
app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: 'views/',
    layoutDir: 'views/',
    defaultLayout: 'layout'
}))

app.use('/feed', express.static('public'))
