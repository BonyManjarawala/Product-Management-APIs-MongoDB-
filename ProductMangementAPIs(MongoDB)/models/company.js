const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
    companyid : String,
    name : String,
    productid : [{
        type:String
    }]
    });

const companyModel = mongoose.model("company",companySchema,"company");
module.exports = companyModel;