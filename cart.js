var express=require('express')
var mongoose=require('mongoose')
var Schema=mongoose.Schema;
const cart_item=new Schema({
    user_name:{
      type:String,
      required:true
    },
    address:{
     type:String,
     required:true
    },
    id:{
        type:String,
        required:true
    },
    item_name:{
        type:String,
        required:true
    },
    item_description:{
        type:String,
        required:true
    },
    item_price:{
        type:Number,
        required:true
    },

},{timestamps:true})

const cart=mongoose.model('cart_item',cart_item);
module.exports=cart;
