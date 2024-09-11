const express = require('express')
const activitiesController = require('../../controllers/activity')
const { protectRoute } = require('../../auth');
const router = express.Router()
const multer = require('multer')

router.get('/activities',activitiesController.get)
router.get('/activity/:slug', activitiesController.get)
router.post('/activity',protectRoute, activitiesController.post)
router.put('/activity/:id',protectRoute, activitiesController.put)
router.delete('/activity/:id', protectRoute, activitiesController.delete)

module.exports = router