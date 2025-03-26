// "Write a recursive function to write the power function.
// a^n = a*a*a.....n times
// using O(N) TC
// and then reduce the TC to O(LogN)"

const powerFunction = (a,n) => {
  console.log('powerFunction:', a,n);   
  if(n === 1) {
    console.log('1:', a);
    return a;
  }
  const half = parseInt(n/2);
  // console.log('half:', half);
  if(n%2 === 0) {
    console.log('if:', half);
    const halfCal = powerFunction(a, half);
    return halfCal * halfCal;
  }
  else {
    console.log('else:', half);
    const halfCal = powerFunction(a, half);
    return halfCal * halfCal * a;
  }
}

const num=3;
const power = 10;
const result = powerFunction(num, power);
console.log(`${num} raise to power ${power} is: ${result}`);