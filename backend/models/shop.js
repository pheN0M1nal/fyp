const mongoose = require('mongoose');
const Product = require('./products').schema;
const Order = require('./order').schema;

const ShopSchema = mongoose.Schema(
    {
        _id:{
            type: mongoose.Schema.Types.ObjectId,
            auto: true
        },
        designer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        products: [Product],
        order: [Order]
    },
    {
        timestamps: true
    }
);


const Shop = mongoose.model('Shop', ShopSchema);
module.exports = Shop;