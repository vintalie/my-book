const passport = require('passport')

module.exports = {

    loginView: (req,res) => {
      res.render('auth', {login:true})
    },
    registerView: (req,res) => {
      res.render('auth', {register:true})
    },
    logoutUser: (req, res) => {
      req.session.destroy(function(){
        res.redirect('/');
      });
    },
    authUser: (req,res) => {
      passport.authenticate('local', {
        successRedirect: req.query.next ? req.query.next : '/dashboard',
        failureRedirect:'/login?error'
      })(req,res)
    },
    
}