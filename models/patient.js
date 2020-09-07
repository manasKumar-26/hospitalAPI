const mongoose=require('mongoose');
const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },  
},{
    timestamps:true,
});
const patient=mongoose.model('patient',patientSchema);
module.exports=patient;