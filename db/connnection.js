var mongoose = require('mongoose')

var FeedSchema = new mongoose.Schema(
    {
        question: String,
        tread: {
            question: String,
            date: Date,
            score: Number,
            answer: {
                text: String,
                date: Date,
                ishidden: Boolean
            }
        }
    }
)

// var feed = mongoose.model('feed', feedschema, 'post')
// var questions = mongoose.model('question', questionschema, 'post')

mongoose.model('Feed', FeedSchema)
mongoose.connect('mongodb://localhost/sof', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
