const express=require('express');
const router=express.Router();
const fb=require('../service/fibonacci')

router.get('/',(req,res,next)=>{

    const num=req.query.n;

    const number=parseInt(num)

    const answer=fb(number);

    res.send(200,answer)
})

module.exports=router