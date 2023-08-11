const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

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

// Import mongoose module
const mongoose = require('mongoose')

// set "stricquery: false" to globally opt into filtering propeties that aren't in the schela

mongoose.set("strictQuery", false)

// define database url to connect to
const mongoDB ="mongodb://127.0.0.1/my_database"

//async function main() to wait for databse to connect, log error if problem

async function main(){
  await mongoose.connect(mongoDB)
}

main()
  .then(console.log('mongoDB connect success'))
  .catch((err)=>console.error(err))


// II. CREATE MONGOOSE SCHEMA AND MODEL

// Define a schema
const schema = mongoose.Schema
// On définit les champs du schema :
const SomeModelSchema = new Schema({
  a_string: String,
  a_Date: Date
})

//  Transformer le schema en model :
const someModel = mongoose.model("SomeModel", SomeModelSchema)//le 1er argument c'est le nom qu'on donne à la collection, le 2nd argument c'est le schema qu'on veut utiliser pour créer le model

module.exports = app;
