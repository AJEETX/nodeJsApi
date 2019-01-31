const express=require('express');
const router=express.Router();
const reverse=require('../service/reverse')

router.get('/',(req,res)=>{

    const str=req.query.sentence;

    const answer=reverse(str);

    res.status(200).send(answer)
})
module.exports=router