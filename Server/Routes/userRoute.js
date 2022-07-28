const express = require('express');
const router = express.Router();
const userCtrl = require('../Controllers/userCtrl')
const loginCtrl = require('../Controllers/loginCtrl')

router.get('/get', userCtrl.getUser)
router.post('/post', userCtrl.postUser)
router.post('/verify', userCtrl.verify)
router.post('/login', loginCtrl.login)
module.exports = router