let arr = [6,9,6,10,9];

let answer = 0;
for(let i = 0; i< arr.length; i++){
  answer = answer ^ arr[i];
}

console.log('Unique Element is:', answer);