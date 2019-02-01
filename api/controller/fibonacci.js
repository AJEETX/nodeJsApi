const express=require('express');
const router=express.Router();
const fb=require('../service/fibonacci')

router.get('/',(req,res,next)=>{

    const num=req.query.n;

    const answer=fb(number);

    res.status(200).send(answer.toString())
})

module.exports=router