var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const route=require('./routes/routes');
var index = require('./routes/index');
var users = require('./routes/users');
var mongoose=require('mongoose');
var app = express();
mongoose.Promise=global.Promise;
if(process.env.NODE_ENV!=='test'){
mongoose.connect(process.env.MONGOLAB_URI,function(error){
  if(error)
  console.error(error)
  else {
    console.log('mongolab connected')
  }
});
}
//watch for incoming req to the route
//http://localhost:3050/api
app.use(bodyParser.json());

route(app);

app.use((err, req, res, next)=>{

  res.status(422).send({err: err.message});



})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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



module.exports = app;
