const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    designerID: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description:
    {
        type: String,
        required: true
    },
    quantity: {
        type: [Number],
        required: true
    },
    size: {
        type: [String],
        required: true
    }

});


const Product = mongoose.model('Product', productsSchema);
module.exports = Product;