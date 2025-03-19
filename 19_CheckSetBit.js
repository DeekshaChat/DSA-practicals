// Given a number N. Check if the ith bit of the number is set or not.
// N=21
let n = 21;
let i = 3;

let setBitVal = n & (1 << i);

if(setBitVal !== 0){
  console.log('Bit is set - ON');
} else {
  console.log('Bit is not set - OFF');
}