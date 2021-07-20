const mongoose = require('mongoose');

//creation of table
const userSchema= new mongoose.Schema({
    
   uname:{
        type:String,
        required:true        
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }

});

//compiling the sc hema into model
 
module.exports = mongoose.model('UsersSchema', userSchema); 
