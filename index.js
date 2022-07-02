require("dotenv").config();
const express = require("express"); 
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const cors = require("cors");

mongoose.connect(process.env.MONGO_CONNECT)
.then(()=>console.log("DB Connection Successfull"))
.catch((err)=>{
    console.log(err)
})

app.listen(port,()=>{
    console.log("Backend server is running")
})