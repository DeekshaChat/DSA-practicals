// "Binary Array. We can atmost replace a single 0 with 1. Find max consecutive 1's we can get in an array.
// Ex: 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0"

const arr = [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0];

const left = [];
const right = [];
const n = arr.length;
let oneCount=0;
for(let i= 0; i<n; i++) {
  if(arr[i] === 0){
    oneCount = 0;
  } else {
    oneCount++;
  }
  left.push(oneCount);
}
console.log('Left array is:', left);

oneCount=0;
for(let i= n-1; i>=0; i--) {
  if(arr[i] === 0){
    oneCount = 0;
  } else {
    oneCount++;
  }
  right.push(oneCount);
}
right.reverse();
console.log('Right array is:', right);

let sum =0;
let tempSum = sum;
for(let i= 0; i<n; i++){
  if(arr[i] === 0) {
    if(i== 0) {
      sum = right[i+1];
    } else if( i === n-1) {
      sum = left[i-1];
    } else {
      sum = left[i-1] + right[i+1];
    }
    tempSum = Math.max(tempSum, sum);
  }
}
console.log(`Max consecutive 1's we can get in an array is:${tempSum}`);