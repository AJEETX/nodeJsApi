module.exports=(a,b,c)=>{

    if(a==b && b==c)
        return 'Equilateral'
    if(b==c)
        return 'Isosceles'
    if(a!=b && b!=c)
        return "Scalene"
    
}
