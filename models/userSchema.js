const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    
    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    myReferralCode : {
        type : String,
        required : true
    },

    referrerCode : {
        type : String,
        default : null
    },

    referralCount : {
        type : Number,
        default : 0
    }

})

const User = mongoose.model('user_records', userSchema);

module.exports = User;