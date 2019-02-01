module.exports=(a,b,c)=>{

    let side1=parseInt(a),side2=parseInt(b),side3=parseInt(c);
    if(side1+side2<=side3 || side2+side3<=side1 || side1+side3<=side2){
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
