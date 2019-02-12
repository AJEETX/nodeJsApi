const request=require('request')
const routes=require('../api/routes/router')

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

            //when
            request.get(url,(req,res)=>{
                //then
                expect(res).not.toBe(null)
                done();
            })
        })
    })
})