const express=require('express')
const app=express(),
swaggerUi=require('swagger-ui-express'),
doc=require('./swagger.json');
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(doc))



const fibonacci=require('./api/routes/fibonacci')
const reverse=require('./api/routes/reverse')
const token=require('./api/routes/token')
const triangletype=require('./api/routes/triangleType')



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