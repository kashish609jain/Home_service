const  mongoose  = require("mongoose");

const validator = require("validator");
const userSchema = mongoose.Schema({
      
    name :{
        type:String,
        require: true,
        minLength:3

    },
    email:{
       type :String,
       require:true,
       validator(value){
           if(!validator.isEmail(value)){
               throw new Error("Invalid email id")
           }
       }
    },
    phone :{
        type:String,
        require: true,
        minLength:3

    },
    message :{
        type:String,
        require: true,
        minLength:3

    },
    time :{
        type:String,
        require: true,
        minLength:3

    },

})

const User = mongoose.model("User",userSchema);
module.exports =User;
