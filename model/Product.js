const mongoose = require("mongoose")

const ProductShema = new mongoose.Schema({
    title:{type:String , required:true},
    desc:{type:String,required:true},
    categories:{type:Array},
    price:{type:Number,required:true}
},{
    timestamps:true
})

module.exports = mongoose.model("Product",ProductShema)