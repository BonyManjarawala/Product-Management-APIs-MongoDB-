const express = require('express')
const router = express.Router();
router.use(express.json());

const companyModel = require("../models/company");
const productModel = require("../models/products");
const sellerModel = require("../models/seller");

router.post("/addcompany",(req,res)=>{
    const { newCompany } = req.body;
    companyModel.create(newCompany);
    return res.json({ data:" Company name added Succesfully"});
});

router.post("/fetchcompany",async(req,res)=>{
    const product_name = req.body.title;
    const comapny = await productModel.findOne({title:product_name});
    //return res.json({data:comapny});
    const company_id = comapny.company_id;
    const company = await companyModel.findOne({companyid:company_id});
    return res.json({data:company});
});


router.post("/fetchcompanyproduct",async(req,res)=>{
    const company_name = req.body.name;
    const company = await companyModel.findOne({name:company_name});
    //return res.json({data:seller});

    const productid = company.product_ids;
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

router.put("/updatecompany/:id",async(req,res)=>{
    const cid = req.params.id;
    const cname = req.body.name;
    const company = await companyModel.findOneAndUpdate({company_id:cid},{name:cname},{new:true});
    return res.json({result:"updated Succesfully",company:company});
});

router.delete("/deletecompany/:id",async(req,res)=>{
    const company_id = req.params.id;
    const company = await companyModel.findOneAndDelete({company_id:company_id});
    return res.json("Deleted Succesfully");
});

module.exports = router;