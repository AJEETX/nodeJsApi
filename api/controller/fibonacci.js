const express=require('express');
const router=express.Router();
const fb=require('../service/fibonacci')

router.get('/',(req,res,next)=>{
    
    let answer
    
    let number=req.query.n;

    answer=fb(number);

    res.status(200).send(answer.toString())
})

module.exports=router