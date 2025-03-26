// Write a recursive function to print all numbers from 1 to N

const printNumber = (n) => {
  if(n=== 1) {
    console.log(1);
  } else {
    printNumber(n-1);
    console.log(n);
  }
}

const num= 9;
printNumber(num);