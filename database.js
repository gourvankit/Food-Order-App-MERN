var express=require('express')
var mongoose=require('mongoose')
var Schema=mongoose.Schema;
const food_item=new Schema({
    user_name:{
        type:String,
        required:true
    },
    user_address:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

},{timestamps:true})

const food=mongoose.model('food_item',food_item);
module.exports=food;
