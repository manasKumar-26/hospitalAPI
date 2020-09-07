const mongoose=require('mongoose');
const docSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
  
},{
    timestamps:true,
});
const doc=mongoose.model('doc',docSchema);
module.exports=doc;