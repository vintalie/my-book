const Models = require('../../models')
const Categories = Models.Categories

module.exports = {
    get:async(req,res) => {
        const public = !req.isAuthenticated()
        let search
        const categories = await Categories.findAll()
        if(req.params.id){
            search = await Categories.findOne({where:{id:req.params.id}})
            if(search != null) res.render('categories', {categories:[search], public:public})
            if(search == null) res.render('categories', {message:'Not Found', public:public} , )
        }
        if(!req.params.id){
            if(!public) search = await Categories.findAll({where:{originUserID:req.user.id}})
            if(public) search = categories
        }
        res.render('categories', {categories:search, public:public})
    },
    post:async(req,res) => {
        let search = await Categories.findAll({where:{originUserID:req.user.id}})
        const originUserID = req.user.id
        const {name, hierarchy, image, body} = req.body;
        const slug = name.toLowerCase().replace(' ', '-')
        
        if(!name || !hierarchy|| !body) {
            return res.render('categories', { categories:search, message: 'Please fill all fields'})
        }
        if(await Categories.findOne({where: {slug}})){
            return res.render('categories', { categories:search, message: 'Already Exist'})
        }
        await Categories.create({name, hierarchy, image, body, originUserID, slug})
            res.redirect('categories?registrationdone')
    },
    put:async(req,res) => {
        const {name, hierarchy, image, body} = req.body;
        const slug = name.toLowerCase().replace(' ', '-')
        const originUserID = req.user.id
        if(!name || !hierarchy|| !body) {
            return res.render('categories', { categories:search, message: 'Please fill all fields'})
        }
        if(await Categories.findOne({where:{id:req.params,id}})){
            await Categories.update({name, hierarchy, image, body, originUserID, slug}, {where:{id:req.params,id}})
            res.send(200)
        }    
    },
    delete:async(req,res) => {
        
        await Categories.destroy({where: {id:req.params.id}})
        await Categories.destroy({where: {hierarchy:req.params.id}})
        res.send(200)
        }
}