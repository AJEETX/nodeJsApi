const fibonacci=require('../api/service/Fibonacci')

describe('Fibonacci number ',()=>{
    it('returns 5 for the input number 5',()=>{
        
        //given
        let number=5;

        //when
        let result=fibonacci(number);

        //then
        expect(result).toBe('5');

    })

    it('returns 34 for the input number 9',()=>{
        
        //given
        let number=5;

        //when
        let result=fibonacci(number);

        //then
        expect(result).toBe('5');

    })
})