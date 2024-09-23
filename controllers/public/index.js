const Models = require('../../models')
const Activities = Models.Activities

module.exports = {
    about:{
        get: async(req,res) => {
            const public = true
            let search
            if(public) search = Activities.findAll()
            res.render('public/about', {activities:search, public:public})
        }
    },
   get: async(req,res) => {
            const public = true
            let search
            if(public) search = Activities.findAll()
            res.render('index', {activities:search, public:public})
        }
    }