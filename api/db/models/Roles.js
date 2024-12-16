const mongoose=require("mongoose");

const schema=mongoose.Schema({
    role_name:{type:String,required:true},
    is_active:{type:Boolean,default:true},
    created_by:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    }
},{
    versionKey:false,
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_At"
    }
})
class Roles extends mongoose.Model{

}

schema.loadclass(Roles)
module.exports=mongoose.model("roles",schema);