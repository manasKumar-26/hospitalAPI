const pat=require('../models/patient');
const patReport=require('../models/patient-report');
const passportjwt=require('../config/passportjwt');
//register a patient
module.exports.register=async function(req,res){
    try {
        let patient=await pat.findOne({phone:req.body.phone});
        if(patient){
            return res.status(301).json({
                message:'Number Already Registerd',
            })
        }
        pat.create(req.body,(err,newPat)=>{
            console.log(res.locals)
            return res.status(200).json({
                message:'New Patient Entered',
                id:newPat._id,
            })
        })
    } catch (error) {
        return res.status(500).json({
            message:'Internal Server Error',
        })
    }
}
//create a report for the a patient
module.exports.createReport=async function(req,res){
   try{
        let patient=await pat.findOne({phone:req.body.phone});
        if(patient){
            patReport.create({
                phone:req.body.phone,
                CovidTest:req.body.test,
                quarantine:req.body.isolation,
                doctor:req.query.id,
            },(err,newReport)=>{
                if(err){
                    return res.status(500).json({
                        message:'Internal Server Error',
                    }) 
                }
                return res.status(200).json({
                    message:'Report Done',
                })
            })
        }
   }catch(err){
        return res.status(500).json({
            message:'Internal Server Error',
        })
   }
}
//view report of a patient
module.exports.viewReport=async function(req,res){
    let patientReport=await patReport.findOne({phone:req.query.phone});
    if(!patientReport){
        return res.status(303).json({
            message:'Report Not Available',
        })
    }
    return res.status(200).json({
        message:'Report Generated',
        data:{
            report:patientReport,
        }

    })
}
//view all my patients 
module.exports.mypatient=async function(req,res){
    let myreport=await patReport.find({doctor:req.query.id});
    if(!myreport){
        return res.status(303).json({
            message:'Report Not Available',
        })
    }
    return res.status(200).json({
        message:'Reports',
        data:{
            report:myreport,
        }

    })
}