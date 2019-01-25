const http=require('http'),
app=require('./app')

const port=process.env.PORT || 9000;

const server=http.createServer(app);

server.listen(port,()=>
    console.log(`server running port ${port}`))