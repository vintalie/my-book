const passport = require('passport')

module.exports = {

    login: {
      get:(req,res) => {
        res.render('auth', {login:true})
      },
    },
    register:{get:(req,res) => {
      res.render('auth', {register:true})
    }},
    auth:{
      get:(req, res) => {
        req.session.destroy(function(){
          res.redirect('/');
        });
      },
      post:(req,res) => {
        passport.authenticate('local', {
          successRedirect: req.query.next ? req.query.next : '/dashboard',
          failureRedirect:'/login?error'
        })(req,res)
      }
    }
    
}