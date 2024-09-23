const express = require('express')
const router = express.Router()
const publicControllers = require('../../controllers/public')


router.get('/', publicControllers.get)
router.get('/about', publicControllers.about.get)


module.exports = router