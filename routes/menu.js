const express = require('express')
const router = express.Router()
const menuController = require('../controllers/menu')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', menuController.getIndex)
router.get('/:id',menuController.editMenu)
router.get('/delete/:id',menuController.deleteMenu)
router.post('/save',menuController.saveMenu)
router.post('/new', menuController.newMenu)
router.post('/favoritesMenu', menuController.favoritesMenu)

module.exports = router;