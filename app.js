const express=require('express')
const app=express(),
swaggerUi=require('swagger-ui-express'),
doc=require('./swagger.json'),
morgan=require('morgan');

app.use(morgan('combined'))
app.use('/swagger',swaggerUi.serve,swaggerUi.setup(doc))

const fibonacci=require('./api/controller/fibonacci')
const reverse=require('./api/controller/reverse')
const token=require('./api/controller/token')
const triangletype=require('./api/controller/triangleType')

app.use('/api/Fibonacci',fibonacci)
app.use('/api/Reverse',reverse)
app.use('/api/Token',token)
app.use('/api/TriangleType',triangletype)

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