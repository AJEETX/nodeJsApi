const http=require('http'), app=require('./app').app

const port=process.env.PORT || 9000;

const serverService=(http,app,port)=>{

    const server=http.createServer(app);

    server.listen(port,()=> console.log(`server running port ${port}`))
}

serverService(http,app,port);

module.exports=serverService;