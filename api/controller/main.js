const express=require('express');
const router=express.Router();

const fibonacci=require('../service/fibonacci')
const reverse=require('../service/reverse')
const token=require('../service/token')
const triangle=require('../service/triangleType')

router.get('/',(req,res)=>{
    
    let param=req.query;
    
    let answer
    
    let services={
        '/api/Fibonacci':{ func:fibonacci,query: param.n},
        '/api/Reverse':{func:reverse,query:param.sentence},
        '/api/Token':{func:token,query:''},
        '/api/TriangleType':{func:triangle,query:[param.a,param.b,param.c]}
    };

    let service=services[req.baseUrl]
    
    answer=service.func(service.query)

    res.status(200).send(answer)
})

module.exports=router