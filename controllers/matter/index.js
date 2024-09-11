const Matters = require('../../models/Matters')

module.exports = {
    get:async(req,res) => {
        const public = !req.isAuthenticated()
        let search
        const matters = await Matters.findAll()
        if(req.params.id){
            search = await Matters.findOne({where:{id:req.params.id}})
            if(search != null) res.render('matters/home', {matters:[search], public:public})
            if(search == null) res.render('matters/home', {message:'Not Found', public:public} , )
        }
        if(!req.params.id){
            if(!public) search = await Matters.findAll({where:{originUserID:req.user.id}})
            if(public) search = matters
        }
        res.render('matters/home', {matters:search, public:public})
    },
    post:async(req,res) => {
        let search = await Matters.findAll({where:{originUserID:req.user.id}})
        const originUserID = req.user.id
        const {name, hierarchy, image, body} = req.body;
        const slug = name.toLowerCase().replace(' ', '-')
        
        if(!name || !hierarchy|| !body) {
            return res.render('matters/home', { matters:search, message: 'Please fill all fields'})
        }
        if(await Matters.findOne({where: {slug}})){
            return res.render('matters/home', { matters:search, message: 'Already Exist'})
        }
        await Matters.create({name, hierarchy, image, body, originUserID, slug})
            res.redirect('matters?registrationdone')
    },
    put:async(req,res) => {
        const {name, hierarchy, image, body} = req.body;
        const slug = name.toLowerCase().replace(' ', '-')
        const originUserID = req.user.id
        if(!name || !hierarchy|| !body) {
            return res.render('matters/home', { matters:search, message: 'Please fill all fields'})
        }
        if(await Matters.findOne({where:{id:req.params,id}})){
            await Matters.update({name, hierarchy, image, body, originUserID, slug}, {where:{id:req.params,id}})
            res.send(200)
        }    
    },
    delete:async(req,res) => {
        
        await Matters.destroy({where: {id:req.params.id}})
        await Matters.destroy({where: {hierarchy:req.params.id}})
        res.send(200)
        }
}