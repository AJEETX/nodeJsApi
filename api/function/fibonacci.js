module.exports=(number)=>{

  const Phi=(1+Math.sqrt(5))/2

  const phi=(1-Math.sqrt(5))/2

  let fibonacciNumber=[Math.pow(Phi,number)-Math.pow(phi,number)]/Math.sqrt(5)

  return Math.round(fibonacciNumber);
}
