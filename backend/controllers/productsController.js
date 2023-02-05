const Product = require('../models/products')
const asyncHandler = require('express-async-handler')
const multiparty = require('multiparty')
const path = require('path')


const createProduct = asyncHandler (async (req, res) => {

    console.log('Creating product')
    console.log(process.env.IMAGE_UPLOAD_DIR)
    let form = new multiparty.Form({uploadDir: process.env.IMAGE_UPLOAD_DIR})
    form.parse(req, async function(err, fields, files){
        if(err) return res.send({error: err.message})

        console.log('fields = ' + JSON.stringify(fields, null, 2))
        console.log('files = ' + JSON.stringify(files, null, 2))

        const product = Product({
            designerID: fields.designerID[0],
            productName: fields.productName[0], 
            image: files.image[0].originalFilename, 
            category: fields.category[0], 
            price: fields.price[0], 
            description: fields.description[0], 
            quantity: fields.quantity[0], 
            size: fields.size[0]
        })
    
        await product.save()
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
    // console.log(req.body)
    // const {designerID, productName, image, category, price, description, quantity, size} = req.body
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
    const product = await Product.findById(req.params.id)
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


const getProductsByDesinerID = asyncHandler(async (req, res) => {
    const id = req.params.id
    const products = await Product.find({designerID: id})
    if(products){
        res.json({
            products
        })
    }
    else{
        res.status(400)
        throw new Error('Unable to get the products')
    }
})


const getProductByCategory = asyncHandler(async (req, res) => {
    const category = req.params.category
    const products = await Product.find({category: category})
    if(products){
        res.json({
            products
        })
    }
    else{
        res.status(400)
        throw new Error('Unable to get the products')
    }
})

module.exports = {createProduct, deleteProduct, getProductById, updateProduct,
                    getProductsByDesinerID, getProductByCategory}
