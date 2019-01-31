const express=require('express');
const router=express.Router();
const token=require('../service/token')

router.get('/',(req,res)=>{

    const answer=token();

    res.status(200).send(answer)
})
module.exports=router