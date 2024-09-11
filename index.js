
const express = require('express');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const multer = require('multer')

const authRoutes = require('./routes/auth')
const dashboardRoutes = require('./routes/dash')
const activitiesRoutes = require('./routes/activity')
const usersRoutes = require('./routes/user')
const publicsRoutes = require('./routes/public')
const mattersRoutes = require('./routes/matter')


const db = require('./db.js')
const { init: initAuth } = require('./auth');
const PORT = 8080

var app = express();

// config

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/assets', express.static(__dirname + '/assets'))
// middleware

app.use(express.urlencoded({ extended: false }))
initAuth();
app.use(session({
  resave: true, // don't save session if unmodified
  saveUninitialized: true, // don't create session until something stored
  secret: 'shhhh, very secret'
}));

// Session-persisted message middleware

app.use(passport.initialize());
app.use(passport.session());
app.use(multer().none());


app.use(authRoutes)
app.use(dashboardRoutes)
app.use(activitiesRoutes)
app.use(usersRoutes)
app.use(publicsRoutes)
app.use(mattersRoutes)

db.sync({force:false})
  .then(() => {
    app.listen(PORT, console.log('Server rodando na ' + PORT))
  }) 

