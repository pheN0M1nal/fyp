const mongoose = require('mongoose');

const designersSchema = mongoose.Schema(
    {
        _id:{
            type: mongoose.Schema.Types.ObjectId,
            auto: true
        },
        myName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true, unique: 'That email is already taken'
        },
        accountName: {
            type: String,
            required: true
        },
        bankName: {
            type: Number,
            required: true
        },
        accountNo: {
            type: Number,
            required: true
        },
        totalNoOfOrders: {
            type: Number,
            required: true
        },
        totalSales: {
            type: Number,
            required: true
        },
        avdRatingOfProducts: {
            type: Number,
            required: true
        }


    },    
    {
        timestamps: true
    }
);


const Designer = mongoose.model('Designer', designersSchema);
module.exports = Designer;