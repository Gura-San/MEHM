var mongoose = require('mongoose')

var Feedschema = new mongoose.schema(
    {
        question: string,
        tread: {
            question: string,
            date: date,
            score: number,
            answer: {
                text: string,
                date: date,
                ishidden: boolean
            }
        }
    }
)

// var feed = mongoose.model('feed', feedschema, 'post')
// var questions = mongoose.model('question', questionschema, 'post')

mongoose.model('Feed', Feedschema)
mongoose.connect('mongodb://localhost/sof', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
