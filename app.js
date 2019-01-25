const express=require('express')
const app=express(),
swaggerUi=require('swagger-ui-express'),
doc=require('./swagger.json');
app.use('/',swaggerUi.serve,swaggerUi.setup(doc))

const fibonacci=require('./api/routes/fibonacci')
const reverse=require('./api/routes/reverse')
const token=require('./api/routes/token')
const triangletype=require('./api/routes/triangleType')
app.use((req,res,next)=>{
    res.set({
        "pragma": "no-cache",
        "content-encoding": "br",
        "x-content-type-options": "nosniff",
        "server": "cloudflare",
        "x-aspnet-version": "4.0.30319",
        "x-powered-by": "ASP.NET",
        "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
        "vary": "Accept-Encoding",
        "content-type": "application/json; charset=utf-8",
        "status": "200",
        "cache-control": "no-cache",
        "strict-transport-security": "max-age=15552000; includeSubDomains; preload",
        "cf-ray": "49edb3313ce4a32c-HKG",
        "expires": "-1"
    })
    next();
})
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