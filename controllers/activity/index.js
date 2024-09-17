const Models = require('../../models')
const Activities = Models.Activities
const passport = require('passport')

module.exports = {
  
    get: async (req,res) => {
      let search
      let activity
      const public = !req.isAuthenticated()
      if(!req.params.slug){
        if(!public) search = await Activities.findAll({where:{originUserID:req.user.id}})
        if(public) search = await Activities.findAll()
        res.render('activities/home', {activities:search, public:public})
      }
      if(req.params.slug){
        activity = await Activities.findOne({where:{slug:req.params.slug}})
        if(activity != null) res.render('activities/home', {activities:[activity], public:public})
        if(activity == null) res.render('activities/home', {message:'Not Found', public:public} , )
      }
    },
    post: async(req,res) => {
      let search = await Activities.findAll({where:{originUserID:req.user.id}})
      const originUserID = req.user.id
      const {title, subject, body} = req.body;
      const slug = title.toLowerCase().replace(' ', '-')
      console.debug(req.body)
      if(!title || !subject || !body) {
        return res.render('activities/home', { activities:search, message: 'Please fill all fields'})
      }
      if(await Activities.findOne({where: {slug}})){
        return res.render('activities/home', { activities:search, message: 'Already Exist'})
      }
      await Activities.create({title, subject, body, originUserID, slug})
        res.redirect('activities?registrationdone')
    },
    put: async(req,res) => {
      
      const {title, subject, body} = req.body;
      const slug = title.toLowerCase().replace(' ', '-')
      const originUserID = req.user.dataValues.id
      if(!title || !subject || !body) {
        return res.render('activities/home', { message: 'Please fill all fields'})
      }
      if(await Activities.findOne({where: {id:req.params.id}})){
        await Activities.update({title, subject, body, originUserID, slug}, {where: {id:req.params.id}})
          res.send(200)
        }
      },
    delete: async(req,res) => {
     
      await Activities.destroy({where: {id:req.params.id}})
      res.send(200)
    }
}