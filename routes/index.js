const express=require('express');
const router=express.Router();
//tow routes for doc and patients
router.use('/doctor',require('./doctor'));
router.use('/patient',require('./patient'));
module.exports=router;