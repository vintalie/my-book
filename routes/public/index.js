const express = require('express')
const router = express.Router()
const publicControllers = require('../../controllers/public')

router.get('/', publicControllers.homeView)
router.get('/about', publicControllers.aboutView)


module.exports = router