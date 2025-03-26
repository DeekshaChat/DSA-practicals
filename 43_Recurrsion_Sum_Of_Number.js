// Find Sum of N natural numbers.

const SumOfNumbers = (n) => {
  if(n === 0) {
    return 0;
  } else {
    return n+SumOfNumbers(n-1);
  }
}

const num = 1;
const summedValue = SumOfNumbers(num);
console.log(`Sum of ${num} natural numbers is: ${summedValue}`);