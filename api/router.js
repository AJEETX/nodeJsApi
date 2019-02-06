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
        
        let param=req.query;
        
        let answer
        
        let services={
            '/api/Fibonacci':{ func:apiServices[Fibonacci],query: param.n},
            '/api/Reverse':{func:apiServices[Reverse],query:param.sentence},
            '/api/Token':{func:apiServices[Token],query:''},
            '/api/TriangleType':{func:apiServices[TriangleType],query:[param.a,param.b,param.c]}
        };
    
        let service=services[req.baseUrl]
        
        answer=service.func(service.query)
    
        res.status(200).send(answer)
    })
}

routerService(router,_apiServices);

module.exports={
    routerService:routerService,
    router:router
};