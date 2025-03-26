// "MAX SUBARRAY SUM:
// Find max subarray sum of len k. 
// Ex: -3, 4, -2, 5, 3, -2, 8, 2, -1, 4"
// k=5

const arr = [-3, 4, -2, 5, 3, -2, 8, 2, -1, 4];
let sum = 0;
const k =5;
const n = arr.length;
for(let i =0; i<k;i++){
  sum+= arr[i];
}
console.log(`Sum of first ${k} elements is:${sum}`);

let tempSum = sum;
for(let i=1;i<n-k+1;i++){
  const s = i-1;
  const e = i+k-1;
  sum = sum - arr[s] + arr[e];
  tempSum = Math.max(sum, tempSum);
}
console.log(`Max subarray sum of len ${k} is:${tempSum}`);