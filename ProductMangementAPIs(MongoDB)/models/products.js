const mongoose = require("mongoose");

//Product Schema
const productSchema = mongoose.Schema({
    productid : String,
    title : String,
    price : String,
    category : [{
        type:String
    }],
    companyid : String,
    sellerid : [{
        type:String
    }]
});

const productModel = mongoose.model("products",productSchema,"products");
module.exports = productModel;

