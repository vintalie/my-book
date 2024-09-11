const express = require('express')
const router = express.Router()
const { protectRoute } = require('../../auth')
const categoryController = require('../../controllers/category')

router.get('/category/:id',categoryController.get)
router.get('/categories',categoryController.get)
router.post('/category',protectRoute ,categoryController.post)
router.put('/category/:id',protectRoute,categoryController.put)
router.delete('/category/:id',protectRoute,categoryController.delete)

module.exports = router