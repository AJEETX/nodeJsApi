const apis=require('../helper/index')

const index=(req,res)=>{
    let services={
        '/api/Fibonacci':{ 
            method:apis.Fibonacci,
            query: req.query.n
        },
        '/api/Reverse':{
            method:apis.Reverse,
            query:req.query.sentence
        },
        '/api/Token':{
            method:apis.Token,
            query:''
        },
        '/api/TriangleType':{
            method:apis.TriangleType,
            query:[req.query.a,req.query.b,req.query.c]
        }
    };

    let service=services[req.baseUrl]
    
    let answer=service.method(service.query)

    res.status(200).send(answer)
}

module.exports=index;