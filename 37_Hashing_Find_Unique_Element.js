// Given an array. Can you find no of unique elements.
// ex: [6,3,7,3,8,6,9];

const arr = [6,3,7,3,8,6,9];
let arrSet = new Set();
for ( let i =0; i< arr.length; i++){
  arrSet.add(arr[i]);
}
const setSize = arrSet.size;
console.log('No of unique elements in the array is: ', setSize);