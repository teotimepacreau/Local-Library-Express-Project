const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site
const wiki = require("./routes/wiki.js")

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//we specity here the folder where the templates will be stored : /views
app.set('view engine', 'pug');//we set the templating language to pug

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// add the catalog route to the middleware
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.

app.use('/wiki', wiki)

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

// I. CONNECT MONGOOSE

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://teotimepacreau:VfGU4uDQtt69e@cluster0.fhbkv8l.mongodb.net/local_library?retryWrites=true&w=majority";

main()
  .then(console.log("mongoDB connected"))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// details credentials connexion mongoDB : voir note BITWAR

module.exports = app;
