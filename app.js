var express=require('express')
const { default: mongoose } = require('mongoose')
const app=express();
const fd=require("./models/database");
const ct=require("./models/cart");
mongoose.connect('mongodb://localhost:27017/Food_Order_App',{
    useNewUrlParser:true,useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("connection to db successfull");
    }
})
app.get('/',async(req,res)=>{
    res.send(await fd.findOne({id:'m1'}));
})
app.listen(9002,function(req,res){
    console.log('Running....')
    })