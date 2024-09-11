module.exports = {
    dashboardView:(req,res) => {
        res.render('dash/home', {user:req.user})
    },
    
}