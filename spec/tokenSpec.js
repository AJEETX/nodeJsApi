const token=require('../api/service/Token')

describe('Token ',()=>{

    it('return the token ',()=>{

        //given

        //when
        let result=token();

        //then
        expect(result).toEqual('0a6bf63d-0ad1-47a0-9aee-aa0a5904f47c');

    })
})