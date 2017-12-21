var mongoose = require('./connnection')

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
                isHidden: Boolean
            }
        }
    }
)

// var Feed = mongoose.model('Feed', FeedSchema, 'post')
// var Questions = mongoose.model('Question', QuestionSchema, 'post')
var Feed = mongoose.model('Feed', FeedSchema)

module.exports = Feed
