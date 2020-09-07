const express=require('express');
const router=express.Router();
const passport=require('passport')
const PC=require('../controllers/patientController');
//only authorized doctors can treat patients
router.post('/create',passport.authenticate('jwt',{session:false}),PC.register);//new patient
router.post('/createReport',passport.authenticate('jwt',{session:false}),PC.createReport);//report creation
router.get('/viewReport',passport.authenticate('jwt',{session:false}),PC.viewReport);//view report of a patient
router.get('/MyPatients',passport.authenticate('jwt',{session:false}),PC.mypatient);//view report of all my patients
module.exports=router;