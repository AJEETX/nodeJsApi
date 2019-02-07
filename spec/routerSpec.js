const request=require('request')
const routerFunc=require('../api/routes/router')

const express=require('express');
const router=express.Router();

const baseUrl='http://localhost:9000/'
describe('Router ',()=>{

    describe('GET /api/Fibonacci  ',()=>{

        let apiUrl='api/Fibonacci';
        let query='?n=5'
        
        it('return status code 200 ',(done)=>{

            //given
            let url=baseUrl+apiUrl+query;
            const Fibonacci='Fibonacci',Reverse='Reverse',Token='Token',TriangleType='TriangleType';
            const _apiServices={
                Fibonacci:require('../api/service/'+Fibonacci),
                Reverse:require('../api/service/'+Reverse),
                Token:require('../api/service/'+Token),
                TriangleType:require('../api/service/'+TriangleType)
            };
            

            //when
            setTimeout(function(){
                routerFunc.routerService(router,_apiServices),1000
            });
            
            // request.get(url,(err,response,body)=>{

            //     //then
            //     expect(response.statusCode).toBe(200);
            //     done();
            // })
        })
    })
})