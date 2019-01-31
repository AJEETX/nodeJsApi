const express=require('express');
const router=express.Router();
const reverse=require('../function/reverse')

router.get('/',(req,res,next)=>{

    const str=req.query.sentence;

    const answer=reverse(str);
    
    res.status(200).send(answer)
})
module.exports=router