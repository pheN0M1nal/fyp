const express = require('express');
const router = express.Router();
const { createProduct, deleteProduct, getProductById  } =  require('../controllers/productsController')


router.post('/createProduct', createProduct)
router.get('/getProductByID/:id', getProductById)
router.delete('/deleteProductByID/:id', deleteProduct)


module.exports = router;