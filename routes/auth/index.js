const express = require('express')
const authController = require('../../controllers/auth')
const userController = require('../../controllers/user')
const router = express.Router()

router.get('/login', authController.loginView)
router.post('/login', authController.authUser)

router.get('/register', authController.registerView)
router.post('/register', userController.addUser)

router.get('/logout', authController.logoutUser)

module.exports = router;