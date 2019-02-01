const express=require('express');

const app=express(),
    swaggerUi=require('swagger-ui-express'),
        doc=require('./swagger.json'),
            morgan=require('morgan');

app.use(morgan('combined'))
app.use('/swagger',swaggerUi.serve,swaggerUi.setup(doc))

const main=require('./api/controller/main')

app.use('/api/Fibonacci',main)
app.use('/api/Reverse',main)
app.use('/api/Token',main)
app.use('/api/TriangleType',main)

app.use((req,res,next)=>{
    const err=new Error('Not Found')
    err.status=404;
    next(err)
})
app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send(err.message)
})
module.exports=app;