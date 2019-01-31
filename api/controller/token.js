const express=require('express');
const router=express.Router();
const token=require('../function/token')

router.get('/',(req,res,next)=>{

    const answer=token();
    
    res.status(200).send(answer)
})
module.exports=router