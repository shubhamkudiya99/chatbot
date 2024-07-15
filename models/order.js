const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_records',
        required : true
    },
    cart_id : {
        type : String,
        required : true
    },

    products :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }],

    address_id : {
        type : String
    },
    
    amount : {
        type : Number,
        required : true
    }
    
    // user_id : {
    //     type : String,
    //     required : true
    // }

    // category : {
    //     type : String,
    //     required : true
    // },

    // name : {
    //     type : String,
    //     required : true
    // },

    // image : {
    //     type : String
    // },

    // description : {
    //     type : String
    // }
})

const orders = mongoose.model('orders', orderSchema);

module.exports = orders;