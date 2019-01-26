const http=require('http'),
app=require('./app')
bodyParser=require('body-parser')

const port=process.env.PORT || 9000;

const server=http.createServer(app);

server.listen(port,()=>
    console.log(`server running port ${port}`))