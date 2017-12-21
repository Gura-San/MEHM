const mongoose = require('./connnection')
const seedData = require('./seeds.json')

// const Comment = mongoose.model('Comment')
// const Question = mongoose.model('Question')
var Feed = mongoose.model('Feed')

Feed.remove({})
	.then(() => {
	 	return Feed.collection.insert(seedData)
	})
	.then(() => {
		process.exit()
    })
    




