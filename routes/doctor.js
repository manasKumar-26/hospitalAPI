const express=require('express');
const router=express.Router();
const DC=require('../controllers/doctorController')
router.post('/register',DC.register);
router.post('/login/create',DC.createSession);
module.exports=router;