let ar = [3, -2, 4, 6, -3, 5];
let n = ar.length;

let psAr = [];

for(let i = 0; i< n; i++){
  if(i === 0) {
      psAr[i] = ar[i];
  } else {
      psAr[i] = psAr[i-1] + ar[i];
  }
}
console.log(psAr);
let q = [3,2,5];
// we have to find sum of all elements present on even indexes from 0......i

for(let i = 0; i< psAr.length; i++){
  if(i%2 === 0){
    psAr[i] = (i === 0) ? ar[i] : psAr[i -1] + ar[i];
  } else {
    psAr[i] = psAr[i-1];
  }
}

for(let i = 0; i< q.length; i++){
  console.log(psAr[q[i]]);
}