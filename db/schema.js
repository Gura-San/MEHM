var mongoose = require('./connnection')

var CommentSchema = new mongoose.Schema(
    {
        text: String,
        date: Date,
        isHidden: Boolean
    }
)

var QuestionSchema = new mongoose.Schema(
    {
        text: String,
        date: Date,
        score: Number,
        comment: [Comment]

    }
)

var FeedSchema = new mongoose.Schema(
    {
        questions: [Question]
    }
)

var Feed = mongoose.model('Feed', FeedSchema)
var Questions = mongoose.model('Question', QuestionSchema)
var Comments = mongoose.model('Comment', CommentSchema)



module.exports = Feed
module.exports = Questions
module.exports = Comments
