const express = require('express')
const dashboardController = require('../../controllers/dashboard')
const { protectRoute } = require('../user/auth');
const router = express.Router()

router.get('/dashboard',protectRoute, dashboardController.dashboardView)



module.exports = router;