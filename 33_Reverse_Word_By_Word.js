// "Reverse word by word
// Ex: weather good a its
// o/p: its a good weather"

function reverseString(val){
  let newStr = '';
  for(let i = val.length -1; i>=0; i--){
    newStr+= val[i];
  }
  return newStr;
}

const str= 'weather good a its';
let newStr = '';
let arr = [];

let reverseStr = reverseString(str);
// console.log('reverse string = ', reverseStr);

arr = reverseStr.split(' ');

for(let j = 0; j < arr.length; j++){
  let tempString = reverseString(arr[j]) + ' ';
  newStr += tempString;
}
console.log('Reverse word by word =',newStr);
