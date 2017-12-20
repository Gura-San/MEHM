const schema = require('./schema')
const seedData = require('./seeds.json')

schema.remove({})
	.then(() => {
	 	return schema.collection.insert(seedData)
	})
	.then(() => {
		process.exit()
	})



