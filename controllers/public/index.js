const Models = require('../../models')
const Activities = Models.Activities

module.exports = {
    homeView:async(req,res) => {
        const public = true
        let search
        if(public) search = await Activities.findAll()
        res.render('public/home', {activities:search, public:public})
    },
    aboutView:async(req,res) => {
        const public = true
        let search
        if(public) search = Activities.findAll()
        res.render('public/home', {activities:search, public:public})
    }
}