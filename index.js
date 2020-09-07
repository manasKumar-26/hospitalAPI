const express=require('express');
const port=8000;
const app=express();
const db=require('./config/mongoose');
const doc=require('./models/doctor');
const passport=require('passport');
const passportJWT=require('./config/passportJWT');
app.use(express.urlencoded());
app.use('/',require('./routes'));
app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server Up At port' ,port);
})