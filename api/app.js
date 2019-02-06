const express=require('express');
const app=express(),swaggerUi=require('swagger-ui-express'),doc=require('./swagger.json'),_morgan=require('morgan');
const _router=require('./router')

const expressService=(app,morgan,router)=>{

    app.use(morgan('combined'))
    
    app.use('/swagger',swaggerUi.serve,swaggerUi.setup(doc))
    
    app.use('/api/Fibonacci',router)
    app.use('/api/Reverse',router)
    app.use('/api/Token',router)
    app.use('/api/TriangleType',router)
    
    app.use((req,res,next)=>{
        const err=new Error('Not Found')
        err.status=404;
        next(err)
    })
    app.use((err,req,res,next)=>{
        res.status(err.status || 500);
        res.send(err.message)
    })
}
expressService(app,_morgan,_router.router);

module.exports={
    app:app,
    expressService:expressService
};
