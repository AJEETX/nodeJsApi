const express=require('express');
const router=express.Router();
const fb=require('../service/fibonacci')
const reverse=require('../service/reverse')
const token=require('../service/token')
const triangle=require('../service/triangleType')

let services={'/api/Fibonacci':fb,'/api/Reverse':reverse,'/api/Token':token,'/api/TriangleType':triangle};

router.get('/',(req,res)=>{
    
    let answer

    let query=req.query;

    let func=services[req.baseUrl]
    
    if(query.n){
        answer=func(query.n);
    }
    else if(query.sentence){
        answer=func(query.sentence);
    }
    else if(req.url.length==1){
        answer=func()
    }
    else if(req.query.a && req.query.b && req.query.c){
        answer=func(req.query.a,req.query.b,req.query.c);
    }

    res.status(200).send(answer)
})

module.exports=router