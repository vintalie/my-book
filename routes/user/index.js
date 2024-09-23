const express = require('express')
const AuthController = require('../../controllers/auth')
const UsersController = require('../../controllers/user')
const router = express.Router()
const { protectRoute } = require('../../controllers/user/auth');


router.get('/user', protectRoute, UsersController.get )
router.get('/user/:id', UsersController.get )
router.put('/user/:id', UsersController.put )
router.delete('/user/:id', UsersController.delete )

router.get('/u', protectRoute, UsersController.get )
router.get('/u/:id', UsersController.get )
router.put('/u/:id', UsersController.put )
router.delete('/u/:id', UsersController.delete )

router.get('/login', AuthController.login.get)
router.get('/register', AuthController.register.get)
router.post('/login', AuthController.auth.post)
router.post('/register', UsersController.post)

router.get('/logout', AuthController.auth.get)

module.exports = router