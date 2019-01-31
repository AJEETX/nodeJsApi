const express=require('express');
const router=express.Router();
const fb=require('../function/fibonacci')

router.get('/',(req,res,next)=>{
    
    const num=req.query.n;

    const answer=fb(num);

    res.send(200,answer)
})

module.exports=router