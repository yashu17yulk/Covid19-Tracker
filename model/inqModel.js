const mongoose = require('mongoose');

//creation of table
const inqSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true,
       index:{
            unique:true,
        } 
    },
    address:{
        type:String,
        required:true,
    }

});

//compiling the sc hema into model
 
module.exports = mongoose.model('inqSchema', inqSchema); 
