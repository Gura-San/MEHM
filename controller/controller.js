const express = require("express");
const connection = require("../db/connection");
const router = express.Router();
const Feed = connection.Feed;
const mongoose = connection.mongoose;
const userController = require('./userController')

router.get("/", (req, res) => {
  Feed.find({}).then(feed => {
    res.render("feed-index", {
      feed: feed
    });
  });
});

router.get("/question/:question", (req, res) => {
  var singleQuestion = req.params.question;
  console.log(singleQuestion);
  //var feedOutput
  Feed.findOne({ question: singleQuestion })
  .then(feed => {
    res.render("thread-index", { feed: feed });
  });
});

router.get("/question/delete/:question", (req, res) => {
  Feed.findOneAndRemove({ question: req.params.question })
  .then(res.redirect("/"))
});

router.post("/question/post/:question", (req, res) => {
  var singleQuestion = req.body.question;
  //var feedOutput
  Feed.create({ question: singleQuestion })
  .then(feed => {
    res.redirect("/");
  });
});

// router.post("/question/:question", (req, res) => {
//   var singleQuestion = req.body.question;
//   //var feedOutput
//   Feed.findOneAndUpdate({ question: singleQuestion })
//   .then(feed => {
//     res.render("thread-index", { feed: feed });
//   });
// });

router
  .route("/signup")
  .get(userController.getSignup)
  .post(userController.postSignup);

router
  .route("/login")
  .get(userController.getLogin)
  .post(userController.postLogin);

router.route("/logout").get(userController.getLogout);

//router.route("/secret").get(authenticatedUser, userController.secret);

module.exports = router;
