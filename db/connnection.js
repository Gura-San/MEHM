var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/stack', { useMongoClient: true })

mongo.Promise = Promise

module.exports = mongoose
