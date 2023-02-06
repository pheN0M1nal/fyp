const express = require('express');
const router = express.Router();
const { createProduct, deleteProduct, getProductById, updateProduct, 
        getProductsByDesinerID, getProductByCategory, getAllProducts } =  require('../controllers/productsController')


router.post('/createProduct', createProduct)
router.get('/getProductByID/:id', getProductById)
router.delete('/deleteProductByID/:id', deleteProduct)
router.put('/updateProduct/:id', updateProduct)
router.get('/getProductsByDesinerID/:id', getProductsByDesinerID)
router.get('/getProductByCategory/:category', getProductByCategory)
router.get('/getAllProducts', getAllProducts)

module.exports = router;