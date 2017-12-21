const express       = require('express')
const connection    = require('../db/connection')
const router        = express.Router()
const Feed          = connection.Feed
const mongoose      = connection.mongoose

router.get('/', ( req, res) => {
    Feed.find({})
      .then((feed) => {
         res.render('feed-index', {
           feed: feed
         })
      })
  })


  router.get('/:question', (req, res) => {
    var singleQuestion = req.params.question
    console.log(singleQuestion)
    //var feedOutput
    Feed.findOne({"question": singleQuestion})
    
    
        .then((feed) => {
        res.render('thread-index', { feed : feed })
    })  
  })

  router.post('/:question', (req, res) => {
    var singleQuestion = req.body.question
    //var feedOutput
    Feed.findOneAndRemove({"question": singleQuestion})
    
        .then((feed) => {
        res.render('thread-index', { feed : feed })
    })  
  })

  router.post('/:question', (req, res) => {
    var singleQuestion = req.body.question
    //var feedOutput
    Feed.create({"question": singleQuestion})
    
        .then((feed) => {
        res.render('thread-index', { feed : feed })
    })  
  })

  router.post('/:question', (req, res) => {
    var singleQuestion = req.body.question
    //var feedOutput
    Feed.findOneAndUpdate({"question": singleQuestion})
    
        .then((feed) => {
        res.render('thread-index', { feed : feed })
    })  
  })


module.exports = router
