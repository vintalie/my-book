
const express = require('express');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const multer = require('multer')

const dashboardRoutes = require('./routes/dash')
const activitiesRoutes = require('./routes/activity')
const usersRoutes = require('./routes/user')
const publicsRoutes = require('./routes/public')
const mattersRoutes = require('./routes/matter')
const categoriesRoutes = require('./routes/category')



const { init: initAuth } = require('./controllers/user/auth');
const PORT = 8080

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/assets', express.static(__dirname + '/assets'))

app.use(express.urlencoded({ extended: false }))
initAuth();
app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: 'shhhh, very secret'
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(multer().none());


app.use(dashboardRoutes)
app.use(activitiesRoutes)
app.use(usersRoutes)
app.use(publicsRoutes)
app.use(mattersRoutes)
app.use(categoriesRoutes)

app.listen(PORT, console.log('Server rodando na ' + PORT))

