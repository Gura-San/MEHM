var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/sof', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
