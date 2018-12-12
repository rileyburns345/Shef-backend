
//// EXPRESS \\\\
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const createError = require('http-errors')

//// AUTH \\\\
// const passport = require('passport')
// const passportSetup = require('./config/passport-setup')
// const cookieSession = require('cookie-session')

//// ROUTERS \\\\
const usersRouter = require('./src/routes/users')


//// EXPRESS \\\\
const app = express()
app.use(express.json())
app.use(logger('dev'))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//// CORS HEADERS \\\\
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE, PUT')
  res.header('Referrer-Policy', 'no-referrer')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  else {
    next()
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

//// ROUTES \\\\
app.use('/users', usersRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
