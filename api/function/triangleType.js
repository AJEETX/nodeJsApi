module.exports=(a,b,c)=>{

    if(a==b==c)
        return 'Equilateral'
    if(a!=b && b!=c)
        return "Error"
    if(b==c)
        return 'Isosceles'
}
