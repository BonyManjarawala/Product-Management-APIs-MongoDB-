const express = require('express')
const router = express.Router();
router.use(express.json());


const companyModel = require("../models/company");
const productModel = require("../models/products");
const sellerModel = require("../models/seller");

router.post("/addseller",(req,res)=>{
    const { newSeller } = req.body;
    sellerModel.create(newSeller);
    return res.json({ data:"Seller name added Succesfully"});
});



router.post("/fetchseller",async(req,res)=>{
    const product_name = req.body.title;
    const seller = await productModel.findOne({title:product_name});
    //return res.json({data:seller});

    const sellerid = seller.seller_id;
    const seller_length = sellerid.length;
    var seller_arr = [];


   i=0;
   j=0;
   if(seller_length>1)
   {
        while (j<seller_length) {
                seller_arr[j] = await sellerModel.findOne({seller_id:sellerid[j]});
                console.log(seller_arr[j]);
                j+=1;
                i+=1;
            }
    return res.json({data:seller_arr});
   }
   else
   {
    seller_arr[j] = await sellerModel.findOne({seller_id:sellerid[j]});
    console.log(seller_arr[j]);
    return res.json({data:seller_arr});
   }
   
});



router.put("/updateseller/:id",async(req,res)=>{
    const sid = req.params.id;
    const sname = req.body.name;
    const seller = await companyModel.findOneAndUpdate({seller_id:sid},{name:sname},{new:true});
    return res.json({result:"updated Succesfully",seller_details:seller});
});


router.delete("/deleteseller/:id",async(req,res)=>{
    const product_id = req.params.id;
    const company = await sellerModel.findOneAndDelete({seller_id:product_id});
    return res.json("Deleted Succesfully");
});


module.exports = router;