var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/stack', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
