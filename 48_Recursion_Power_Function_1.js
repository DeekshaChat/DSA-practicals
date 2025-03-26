// "Write a recursive function to write the power function.
// a^n = a*a*a.....n times
// using O(N) TC
// and then reduce the TC to O(LogN)"

const multiply = (a,n) => {
  if(n==0){
    return 1;
  } else if(n==1){
    return a;
  } else {
    return a*multiply(a, n-1);
  }
}

const num = 3;
const power = 10;
const result = multiply(num, power);
console.log(`${num} raise to power ${power} is: ${result}`);