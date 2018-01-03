var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
const express    = require('express')
const hbs        = require('express-handlebars')
const feeds      = require('./controller/controller')
var parser       = require('body-parser')
var mongoose     = require('./db/connection')
var port         = 3002
var app          = express()

app.use(morgan('dev'));
app.use(cookieParser());
app.use(parser.urlencoded({ extended: true }))

app.use(session({ secret: 'Lab-MEHM-Passport-Sandro-and-Cliff' 
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
  });

// var Feed = mongoose.model('Feed')


app.set('view engine', 'hbs')
app.engine('hbs', hbs({
    extname: 'hbs',
    partialsDir: 'views/partials',
    layoutDir: 'views/',
    defaultLayout: 'layout'
}))

app.use('/', feeds)
app.use('/login', feeds)
//app.use('/question', feeds)
// app.use('/user', feeds)

app.listen(port, () => {console.log(`listening on port ${port}`)})
app.use('/', express.static('public'))



