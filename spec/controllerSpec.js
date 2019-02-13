const controller=require('../controller/index').main
describe('controller ',()=>{

    it('return 200 status ',()=>{

        //given
        let req={
            baseUrl:'api/fibonacci',
            query:{
            n:'5'
        }},res={send:()=>{

        }};

        //when
        let sut=controller(req,res);    

        //then
        expect(sut.res).toBe(true);
    })
})
