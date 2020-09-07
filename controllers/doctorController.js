const Doc=require('../models/doctor');
const jwt=require('jsonwebtoken');
module.exports.register=async function(req,res){
    let doctor=await Doc.findOne({email:req.body.email})
    if(doctor){
        return res.status(500).json({
            message:'Email Already Registered',
        })
    }
    Doc.create(req.body,(err,newDoc)=>{
        if(err){
            return res.status(301).json({
                message:'Server Error',
            })
        }
        return res.status(200).json({
            message:'Successfully Registered',
            DocId:`${newDoc._id}`,
        })
    })
};
module.exports.createSession=async function(req,res){
    try{
        let doc=await Doc.findOne({email:req.body.email});
        if(!doc || doc.password != req.body.password){
            return res.json(422,{
                message:'Check Email / Password',
            });
        }
        return res.status(200).json({
            message:'SuccessFul SignIn Please Keep Your Token Safe !',
            data:{
                id:doc._id,
                token:jwt.sign(doc.toJSON(),'HospitalApi',{expiresIn:'1000000'}),
            }
        })
    }catch(err){
        return res.status(500).json({
            message:'Check Server Connection'
        });
    }
}