const reverse=require('../api/service/Reverse')

describe('Reverse sentence',()=>{

    it('provides the reversed words provided in a sentence as string',()=>{
        
        //given
        let sentence='I am a developer';

        //when
        let result=reverse(sentence);

        //then
        expect(result).toEqual('I ma a repoleved')
    })
})