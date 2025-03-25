// "You are given a char array, containing only lowercase alphabets. sort the given array without using inbuit function.
// Ex: d,a,b,a,c,b,d"
const arr= ["d","a","b",'a','c','b','d'];
const newArr = [];

for(let i = 0; i< arr.length; i++) {
  let val = arr[i];
  let secondVal = val.charCodeAt();
  newArr.push(secondVal);
}

const tempArr = newArr.sort(function(a, b){return a - b});
let newArrrray = [];
for(let i = 0; i< newArr.length; i ++){
  let val = newArr[i];
  let secondVal = String.fromCharCode(val);
  newArrrray.push(secondVal)
}

console.log('Array after char array sorting', newArrrray);