const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    id : {
        type: Number,
        required: true,
        index: true,
        unique: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username : {
        type: String,
    },
    address: {
        type: String, 
    },
    historic: [{
        item: { 
            type: Number, 
            required: true
        },
        review: {
            type: Number,
        }
    }],
    cart: [{
        id: {
            type: Number, 
            required: true,
            unique: true
        },
        ammount: {
            type: Number,
        }
    }]
})

module.exports = mongoose.model('User', schema);