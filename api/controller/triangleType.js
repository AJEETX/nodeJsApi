const express=require('express');
const router=express.Router();
const triangle=require('../function/triangleType')

router.get('/',(req,res,next)=>{

    const a=req.query.a;

    const b=req.query.b;

    const c=req.query.c;

    const answer=triangle(parseInt(a),parseInt(b),parseInt(c));
    
    res.send(200,answer)
})

module.exports=router