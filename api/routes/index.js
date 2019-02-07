const express=require('express');
const server=express(),swaggerUi=require('swagger-ui-express'),doc=require('../swagger.json'),_morgan=require('morgan');
const _router=require('./router')

const expressService=(server,morgan,router)=>{

    server.use(morgan('combined'))
    
    server.use('/swagger',swaggerUi.serve,swaggerUi.setup(doc))
    
    server.use('/api/Fibonacci',router)
    server.use('/api/Reverse',router)
    server.use('/api/Token',router)
    server.use('/api/TriangleType',router)
    
    server.use((req,res,next)=>{
        const err=new Error('Not Found')
        err.status=404;
        next(err)
    })
    server.use((err,req,res,next)=>{
        res.status(err.status || 500);
        res.send(err.message)
    })
}
expressService(server,_morgan,_router);

module.exports={
    server:server,
    expressService:expressService
};
