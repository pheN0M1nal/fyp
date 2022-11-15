const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    myName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, unique: 'That email is already taken'
    },
    password: {
        type: String,
        required: true
    }
});



const User = mongoose.model('User', usersSchema);
module.exports = User;