const mongoose = require('mongoose');

let instance =null;
class database{
    constructor(){
        if(!instance)
        {
            this.mongoConnection=null;
            instance=this;
        }
        return instance;
    }
    async connect(options){
        try{
            console.log("db connetion...");
        let db=await mongoose(options.CONNECTION_STRING);
        this.mongoConnection=db;
        console.log("db connected");
        }catch(err){
            console.error(err);
            process.exit(1);
        }
        
    }
}
module.exports=database;