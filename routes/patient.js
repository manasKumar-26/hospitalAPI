const express=require('express');
const router=express.Router();
const passport=require('passport')
const PC=require('../controllers/patientController');
router.post('/create',passport.authenticate('jwt',{session:false}),PC.register);
router.post('/createReport',passport.authenticate('jwt',{session:false}),PC.createReport);
router.get('/viewReport',passport.authenticate('jwt',{session:false}),PC.viewReport);
router.get('/MyPatients',passport.authenticate('jwt',{session:false}),PC.mypatient);
module.exports=router;