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
    name :{
        type: String, 
    },
    address: {
        type: String, 
    },
    historic: [{
        id: { 
            type: Number, 
        },
        review: {
            type: Number,
        }
    }],
    cart: [{
        id: {
            type: Number, 
        },
        ammount: {
            type: Number,
        }
    }]
})

module.exports = mongoose.model('User', schema);