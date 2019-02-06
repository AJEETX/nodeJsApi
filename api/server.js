const http=require('http'), app=require('./app').app

const port=process.env.PORT || 9000;

const serverService=(http,app,port)=>{

    const server=http.createServer(app);

    const serverMessage=`server running port ${port}`;

    server.listen(port,()=> console.log(serverMessage))
    
    return serverMessage;
}

serverService(http,app,port);

module.exports=serverService;