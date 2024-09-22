const express = require('express')
const AuthController = require('../../controllers/auth')
const UsersController = require('../../controllers/user')
const router = express.Router()
const {protectRoute} = require('../user/auth.js')


router.get('/user', protectRoute, UsersController.get )
router.get('/user/:id', UsersController.get )
router.put('/user/:id', UsersController.post )
router.delete('/user/:id', UsersController.delete )

router.get('/login', AuthController.loginView)
router.get('/register', AuthController.registerView)
router.post('/login', AuthController.authUser)
router.post('/register', UsersController.post)

router.get('/logout', AuthController.logoutUser)

module.exports = router