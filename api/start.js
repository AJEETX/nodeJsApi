const server=require('./routes/index').server

const port=process.env.PORT || 9000;

const start=(server,port)=>{

    const _server=server;

    const serverMessage=`server running port ${port}`;

    _server.listen(port,()=> console.log(serverMessage))
    
    return _server;
}

start(server,port);

module.exports=start;