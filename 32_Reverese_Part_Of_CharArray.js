// "Given a char array, Reverse a part of char array from start to end.
// Ex: a,n,a,c,o,n,d,a, start=2, end = 5
// o/p: a,n,n,o,c,a,d,a"

let str = ['a','n','a','c','o','n','d','a'];
let newStr = [...str];
let startVal = 2;
let endVal = 5;

while(endVal > startVal) {
  let temp = newStr[startVal];
  newStr[startVal] = newStr[endVal];
  newStr[endVal] = temp;
  endVal--;
  startVal++;
}

console.log('Array after swapped elements from 2 to 5=====',newStr);