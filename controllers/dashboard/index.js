module.exports = {
    dashboardView:(req,res) => {
        res.render('users', {user:req.user})
    },
    
}