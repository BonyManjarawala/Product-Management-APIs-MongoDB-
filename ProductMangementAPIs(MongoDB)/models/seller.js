const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema({
    sellerid : String,
    name : String,
    productid : [{
        type:String
    }]
});

const sellerModel = mongoose.model("seller",sellerSchema,"seller");
module.exports = sellerModel;