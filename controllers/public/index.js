const Activities = require('../../models/Activities')

module.exports = {
    homeView:(req,res) => {
        const public = true
        let search
        if(public) search = Activities.findAll()
        res.render('public/home', {activities:search, public:public})
    },
    aboutView:(req,res) => {
        const public = true
        let search
        if(public) search = Activities.findAll()
        res.render('public/home', {activities:search, public:public})
    }
}