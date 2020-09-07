const mongoose=require('mongoose');
const patientReportSchema=new mongoose.Schema({
    phone:{
        type:String,
        required:true,
        unique:true,
    },  
    CovidTest:{
        type:Boolean,
        required:true,
    },
    quarantine:{
        type:String,
        required:true,
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'doc',
    }
},{
    timestamps:true,
});
const patientReport=mongoose.model('patientReport',patientReportSchema);
module.exports=patientReport;