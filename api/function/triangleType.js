module.exports=(a,b,c)=>{

    if(a+b<=c || b+c<=a || a+c<=b){
        return "Error";
    }

    if(a==b && b==c){
        return 'Equilateral';
    }

    if(a==b || b==c || a==c){
        return 'Isosceles';
    }

    if(a!=b && b!=c){
        return "Scalene";
    }
}
