const mongoose=require("mongoose");

const schema=mongoose.Schema({
    role_id:{type:Boolean,default:true},
    permission:{type:String,required:true},
    created_by:{type:mongoose.SchemaTypes.ObjectId,required:true}
    
},{
    versionKey:false,
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_At"
    }
})
class RolePrivileges extends mongoose.Model{

}

schema.loadclass(RolePrivileges)
module.exports=mongoose.model("role_privileges",schema);