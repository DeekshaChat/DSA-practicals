let ar = [-1,4,7,6,-2,7,8,10];
// let ar = [-1,4,7,6,-2,7,8,10, 12];
let n = ar.length;
for (let i= 0; i< n/2; i++) {
  const temp = ar[n-1-i];
  ar[n-1-i] = ar[i];
  ar[i] = temp;
}
console.log(ar);