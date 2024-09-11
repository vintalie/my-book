const express = require('express')
const activitiesController = require('../../controllers/activity')
const { protectRoute } = require('../../auth');
const router = express.Router()
const multer = require('multer')



router.get('/activities',activitiesController.viewActivities)
router.get('/activity/:slug', activitiesController.viewActivity)
router.post('/activities',protectRoute, activitiesController.addActivities)
router.put('/activity/:id',protectRoute, activitiesController.attActivity)
router.delete('/activity/:id', protectRoute, activitiesController.delActivity)

module.exports = router