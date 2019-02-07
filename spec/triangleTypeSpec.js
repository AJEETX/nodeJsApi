const triangleType=require('../api/service/TriangleType')

describe('Triangle ',()=>{

    it('returns the Scalene triangle when input provided is 3,4,5 ',()=>{

        //given
        let sides=[3,4,5];

        //when
        let result=triangleType(sides);

        //then
        expect(result).toEqual('Scalene');
    })

    it('returns the Isosceles triangle when input provided is 3,3,5 ',()=>{

        //given
        let sides=[3,3,5];

        //when
        let result=triangleType(sides);

        //then
        expect(result).toEqual('Isosceles');
    })

    it('returns the Equilateral triangle when input provided is 3,3,3 ',()=>{

        //given
        let sides=[3,3,3];

        //when
        let result=triangleType(sides);

        //then
        expect(result).toEqual('Equilateral');
    })

    it('returns the Error when input provided is 3,10,3 ',()=>{

        //given
        let sides=[3,10,3];

        //when
        let result=triangleType(sides);

        //then
        expect(result).toEqual('Error');
    })
})