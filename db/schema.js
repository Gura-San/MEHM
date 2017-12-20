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


// var schemaExport = {
//     feed: Feed,
//     questions: Questions,
//     comments: Comments
// }


// module.exports = schemaExport
module.exports = mongoose

// const Comment = mongoose.model('Comment')
