const app=require('./routes/index'), 
server=require('express')(),
swaggerUi=require('swagger-ui-express'),
doc=require('./swagger.json'),
morgan=require('morgan'),
router=require('./routes/router'),
port=process.env.PORT || 9000;

const start=(server,app,port,morgan,router,swaggerUi,doc)=>{

    const serverMessage=`server running port ${port}`;

    app(server,morgan,router,swaggerUi,doc);

    server.listen(port,()=> console.log(serverMessage))
    
    return server;
}

start(server,app,port,morgan,router,swaggerUi,doc);

module.exports=start;