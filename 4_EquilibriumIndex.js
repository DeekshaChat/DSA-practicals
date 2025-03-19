// Equlibrium index is the index where 
// sum of left elements of i = sum of right elemnts of i

// let ar = [-3, 2, 4, -1];
let ar = [ -7, 1, 5, 2, -4, 3, 0];
let psAr = [];
let  n = ar.length;
for(let i = 0; i< n; i++){
  if(i === 0) {
    psAr[i] = ar[i];
  } else {
    psAr[i] = psAr[i-1] + ar[i];
  }
}

let eqIndex = -1;

for(let i = 0; i< psAr.length; i++){

  let sumLeft =  i === 0 ? 0:  psAr[i-1];
  let sumRight = i === n -1 ? 0 : psAr[n-1] - psAr[i];
  console.log('i=====', i, sumLeft, sumRight);
  if(sumLeft === sumRight) {
    eqIndex = i;
  }
}
console.log(eqIndex);