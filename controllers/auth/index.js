const passport = require('passport')

module.exports = {

    loginView: (req,res) => {
      res.render('auth/login')
    },
    registerView: (req,res) => {
      res.render('auth/register')
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