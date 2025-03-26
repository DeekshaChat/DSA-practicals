// "Factorial of a number.
// n! = 1*2*3...*n"

const factorial = (n) => {
  if(n <= 1) {
    return 1;
  } else {
    return n*factorial(n-1);
  }
}

const num = 5;
const factorialValue = factorial(num);
console.log(`Factorial of ${num} is: ${factorialValue}`);