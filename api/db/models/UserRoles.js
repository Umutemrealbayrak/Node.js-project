const mongoose=require("mongoose");

const schema=mongoose.Schema({
    role_id:{type:mongoose.SchemaTypes.ObjectId,default:true},
    permission:{type:mongoose.SchemaTypes.ObjectId,required:true}
},{
    versionKey:false,
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_At"
    }
})
class UserRoles extends mongoose.Model{

}

schema.loadclass(UserRoles)
module.exports=mongoose.model("user_roles",schema);