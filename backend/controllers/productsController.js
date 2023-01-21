const Product = require('../models/products')
const asyncHandler = require('express-async-handler') 


const createProduct = asyncHandler(async (req, res) => {

    console.log('Creating product')

    const {designerID, productName, image, category, price, description, quantity, size} = req.body

    const product = Product({
        designerID,
        productName, 
        image, 
        category, 
        price, 
        description, 
        quantity, 
        size
    })

    product.save()
    .then((result) => {
        res.json({
            "product": product 
        })
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json({
            "Error": err 
        })
        throw new Error('err')
    })
})


const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        await product.remove()
        res.json({ message: 'Product removed.' })
    } 
    else {
        res.status(404)
        throw new Error('Product not found')
    }
})
  

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    console.log(product)
    console.log(req.params.id)
    if (product) {
        res.json(product)
    } 
    else {
        res.status(404)
        throw new Error('Product not found')
    }
})

const updateProduct = asyncHandler(async (req, res) => {
  
    const {designerID, productName, image, category, price, description, quantity, size} = req.body
    console.log(req.params.id)
    const product = Product.findById(req.params.id)
    console.log(product)

    if(product){

        product.designerID = designerID,
        product.productName = productName,
        product.image = image,
        product.category = category,
        product.price = price,
        product.description = description,
        product.quantity = quantity,
        product.size = size

        try{
            await product.save()
            res.json({
                "product": product
            })
        }
        catch(err){
            res.status(400).json({
                "err": err
            })
            
        }
        


    }
    else {

        res.status(404)
        throw new Error('Product not found')

    }

    

})

module.exports = {createProduct, deleteProduct, getProductById, updateProduct}
