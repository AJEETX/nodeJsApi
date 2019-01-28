module.exports=(number)=>{

    var first = 0,second = 1,  temp;

  while (number > 0){
    temp = second;
    second = second + first;
    first = temp;
    number--;
  }

  return first;
}
