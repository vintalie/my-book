const express = require('express')
const router = express.Router()
const { protectRoute } = require('../../controllers/user/auth');
const matterController = require('../../controllers/matter')

router.get('/matters/:id',matterController.get)
router.get('/matters',matterController.get)
router.post('/matter',protectRoute ,matterController.post)
router.put('/matter/:id',protectRoute,matterController.put)
router.delete('/matter/:id',protectRoute,matterController.delete)

module.exports = router