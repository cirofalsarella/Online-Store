const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    id : {
        type: Number,
        required: true,
        index: true,
        unique: true
    },
    name : {
        type: String,
        required: true,
    },
    img : {
        type: String,
        required: true,
    },
    description : {
        type: String,
    },
    price : {
        type: Number,
        required: true,
    },
    stock : {
        type: Number,
        required: true,
    },
    reviews: [{
        grade: {
            type: Number,
            required: true
        }
    }]
})

module.exports = mongoose.model('Item', schema);