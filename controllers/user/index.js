const User = require('../../models/User')
const bcrypt = require('bcryptjs');


module.exports ={
    currentUserView:async (req,res) => {
        const public = !req.isAuthenticated()
        let search = await User.findOne({where:{id:req.user.dataValues.id}})
        res.render('user/home', {user:search, public:public})

    },
    specificUserView:async (req,res) => {
        
        const public = !req.isAuthenticated()
        let search = await User.findOne({where:{id:req.params.id}})
        if(search != null) res.render('user/home', {user:search, public:public})
        if(search == null) res.render('user/home', {message:'Not Found', public:public} , )

    },
    addUser: async(req,res) => {
        const {name, email, password} = req.body;
        if(!name || !email || !password) {
          return res.render('auth/register', { message: 'Please fill all fields'})
        }
        if(await User.findOne({where: {email}})){
          return res.render('auth/register', {message: 'Already Exist'})
        }
        await User.create({name,email,password:bcrypt.hashSync(password,8)})
          res.redirect('login?registrationdone')
      },  
    attUser:async (req,res) => {

        const {name, email, password} = req.body;
    
        if(!name || !email || !password) {
            return res.render('user/home', { message: 'Please fill all fields'})
        }
        if(await User.findOne({where: {id:req.user.dataValues.id}})){
            await User.update({name, email, password:bcrypt.hashSync(password)}, {where: {id:req.user.dataValues.id}})
            res.send(200)
            }
        
    },
    delUser:async (req,res) =>{
        await User.destroy({where: {id:req.user.dataValues.id}})
          res.send(200)
        }
}