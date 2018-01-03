var mongoose = require('./connnection')

var FeedSchema = new mongoose.Schema(
    {
        question: String,
        tread: {
            date: Date,
            score: Number,
            answer: [{
                text: String,
                date: Date,
                isHidden: Boolean
            }]
        }
    }
)

var Feed = mongoose.model('Feed', FeedSchema)

module.exports = Feed
