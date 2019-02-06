const express=require('express');
const router=express.Router();
const Fibonacci='Fibonacci',Reverse='Reverse',Token='Token',TriangleType='TriangleType';

const _apiServices={
    Fibonacci:require('./service/'+Fibonacci),
    Reverse:require('./service/'+Reverse),
    Token:require('./service/'+Token),
    TriangleType:require('./service/'+TriangleType)
};

const routerService=(router,apiServices)=>{

    router.get('/',(req,res)=>{
        
        let services={
            '/api/Fibonacci':{ 
                method:apiServices[Fibonacci],
                query: req.query.n
            },
            '/api/Reverse':{
                method:apiServices[Reverse],
                query:req.query.sentence
            },
            '/api/Token':{
                method:apiServices[Token],
                query:''
            },
            '/api/TriangleType':{
                method:apiServices[TriangleType],
                query:[req.query.a,req.query.b,req.query.c]
            }
        };
    
        let service=services[req.baseUrl]
        
        let answer=service.method(service.query)
    
        res.status(200).send(answer)
    })
}

routerService(router,_apiServices);

module.exports={
    routerService:routerService,
    router:router
};