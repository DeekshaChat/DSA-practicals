// "PAIR SUM OR TWO SUM:
// Given n array elements. Check if there exists a pair (i, j) such that 
// arr[i] + arr[j] == k & ( i!= j )
// Ex: {8,9,1,-2,4,5,11,-6,7,5}
// k = 11, O/p: yes
// k = 6: o/p: yes
// k = 22, o/p: No"

const arr =[8,9,1,-2,4,5,11,-6,7,5];
const k = 11;
const arrSet = new Set();
for(let i = 0; i< arr.length; i++) {
  arrSet.add(arr[i]);
}

for(let i = 0; i< arr.length; i++) {
  if(arrSet.has(k-arr[i])){
    console.log(`There exists a pair ${arr[i]} and ${k-arr[i]} whose sum is ${k}`);
  }
}