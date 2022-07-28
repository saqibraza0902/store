const express = require('express');
const router = express.Router();
const productCtrl = require('../Controllers/productCtrl')

router.get('/get', productCtrl.getProducts)
router.post('/post', productCtrl.postProduct)
module.exports = router