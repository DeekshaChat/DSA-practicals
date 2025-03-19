let ar = [1,2,3,1,3,4,6,4,6,3];
let n = ar.length;
let indexMin  = -1;
let indexMax = -1;
let min = Infinity;
let max = -Infinity;

for(let i = 0; i< n; i++){
  if(ar[i] < min){
    min = ar[i];
  }
  if(ar[i] > max){
    max = ar[i];
  }
}
console.log(min, max);

for(let i = 0; i< n; i++){
  if(ar[i] === min){
    indexMin = i;
  }
  if(ar[i] === max){
    indexMax = i;
  }
}
console.log(indexMin, indexMax);
console.log('Min distance is =', Math.min(indexMax, n - indexMin));