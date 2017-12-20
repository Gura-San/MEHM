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

mongoose.model('Feed', FeedSchema)
mongoose.model('Question', QuestionSchema)
mongoose.model('Comment', CommentSchema)

module.exports = schema


