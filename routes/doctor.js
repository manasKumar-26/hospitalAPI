const express=require('express');
const router=express.Router();
const DC=require('../controllers/doctorController')
//register as a new doctor and next one to create a jwt token session
router.post('/register',DC.register);
router.post('/login/create',DC.createSession);
module.exports=router;