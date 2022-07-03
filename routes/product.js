const Product = require('../model/Product');
const router = require('express').Router();

//CREATE

router.post('/', async(req,res)=>{

    const newProduct = new Product(req.body)

    try{

        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)

    }catch(err){
        res.status(500).json(err)
    }
})

//GET PRODUCT

router.get("/",async(req,res)=>{

    const qCategory = req.body.category

    try{

        let product;

        if(qCategory){
            product = await Product.find({
                categories:{
                    $in:[qCategory]
                }
            })
        }else{
            product=await Product.find()
        }

        res.status(200).json(product)

    }catch(err){
        res.status(500).json(err)
    }
} )

module.exports=router