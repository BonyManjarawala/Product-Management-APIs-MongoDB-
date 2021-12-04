const express = require('express')
const router = express.Router();
router.use(express.json());


const companyModel = require("../models/company");
const productModel = require("../models/products");
const sellerModel = require("../models/seller");

router.post("/addproduct",(req,res)=>{
    const { newProduct } = req.body;
    productModel.create(newProduct);
    return res.json({ data:" Product name added Succesfully"});
});

router.post("/fetchsellerproduct",async(req,res)=>{
    const seller_name = req.body.name;
    const seller = await sellerModel.findOne({name:seller_name});
    
    const productid = seller.product_ids;
    const product_length = productid.length;
    var product_arr = [];


   i=0;
   j=0;
   if(product_length>1)
   {
        while (j<product_length) {
                product_arr[j] = await productModel.findOne({product_id:productid[j]});
                console.log(product_arr[j]);
                j+=1;
                i+=1;
            }
    return res.json({data:product_arr});
   }
   else
   {
    product_arr[j] = await productModel.findOne({product_id:productid[j]});
    console.log(product_arr[j]);
    return res.json({data:product_arr});
   }
   
});

router.put("/updateproduct/:id",async(req,res)=>{
    const pid = req.params.id;
    const pname = req.body.name;
    const product = await productModel.findOneAndUpdate({product_id:pid},{title:pname},{new:true});
    return res.json({result:"updated Succesfully",product_details:product});
});

router.delete("/deleteproduct/:id",async(req,res)=>{
    const product_id = req.params.id;
    const company = await productModel.findOneAndDelete({product_id:product_id});
    return res.json("Deleted Succesfully");
});

module.exports = router;