const express       = require('express')
const connection            = require('../db/connection')
const router        = express.Router()
const Feed = connection.Feed

router.get('/', ( req, res) => {
    Feed.find({})
      .then((feed) => {
         res.render('feed-index', {
           feed: feed
         })
      })
  })


  router.get('/', (req, res) => {
    res.render('feed-index', {
        question: 'hello world'
    })
  })

// router.get('/', (req, res) => {
//   res.render('candidates-index', {
//     candidates: db.candidates
//   })
// })

// router.get('/:name', (req, res) => {
//   var desiredName = req.params.name
//   var candidateOutput

//   db.candidates.forEach((candidate) => {
//     if(desiredName === candidate.name){
//       candidateOutput = candidate
//     }
//   })

//   res.render('candidates-show', {
//     candidate: candidateOutput
//   })
// })


module.exports = router
