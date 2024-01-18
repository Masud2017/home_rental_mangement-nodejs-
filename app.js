var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var registerRouter = require('./routes/register');
var viewsGroup = require('./routes/views_router');

// user specific middlewares
var AuthGuard = require('./middlewares/AuthGuard');

var nunjucks = require('nunjucks');
var session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const dotenv = require('dotenv').config();
var uid = require('uid-safe');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'njk');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// console.log((process.env.SESSION_SECRET) ? process.env.SESSION_SECRET : false);


const options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: process.env.DB_NAME
};
const sessionStore = new MySQLStore(options);
app.set('trust proxy', 1) // trust first proxy

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  // saveUninitialized: true,
  cookie: { secure: true, 
    maxAge: 24 * 60 * 60 * 1000 * 7, //seven days 
  },
    sameSite:"lex",
    secure: false,
  store: sessionStore,
  // key: 'user_sid',
}));


// this a filter middleware 
app.use(function(req,res,next){
  console.log("Hello world this is suppose to be a global middleware");
  next();
})
// middlware for routing 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth',authRouter);
app.use('/register',registerRouter);
app.get('/login',viewsGroup.login);
app.get('/singup',viewsGroup.signup);
app.get('/dashboard',AuthGuard,viewsGroup.dashboard);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// configuration for nunjucks
nunjucks.configure(['views','views/layout'], {
  autoescape: true,
  express: app
})



module.exports = app;
