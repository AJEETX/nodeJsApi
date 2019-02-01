const http=require('http'),
router=require('./router')

const port=process.env.PORT || 9000;

const server=http.createServer(router);

server.listen(port,()=>
    console.log(`server running port ${port}`))