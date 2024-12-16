const mongoose=require("mongoose");

const schema=mongoose.Schema({
    email:{type:String,required:true},
    passwword:{type:String,required:true},
    is_Active:{type:Boolean,default:true},
    first_name:String,
    last_name:String,
    phone_number:String

},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_At"
    }
})
class Users extends mongoose.Model{

}

schema.loadclass(Users)
module.exports=mongoose.model("users",schema);