const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id :{
        type : Number
    },

    category : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    image : {
        type : String
    },

    description : {
        type : String
    },
    price : {
        type : Number
    }
})

const Product = mongoose.model('products', productSchema);

module.exports = Product;