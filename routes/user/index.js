const express = require('express')
const UsersController = require('../../controllers/user')
const router = express.Router()
const {protectRoute} = require('../../auth.js')


router.get('/user', protectRoute, UsersController.currentUserView )
router.get('/user/:id', UsersController.specificUserView )
router.put('/user/:id', UsersController.attUser )
router.delete('/user/:id', UsersController.delUser )

module.exports = router