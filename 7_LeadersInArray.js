let ar = [15, -1, 7, 2, 5, 4, 2, 3];
let n = ar.length;

let max = ar[n-1];
let noOfLeaders= 1;
for(let i = n-1; i >= 0; i--){
   if(ar[i] > max){
      max = ar[i];
      noOfLeaders++;
   }
}

console.log('Leaders in an array =', noOfLeaders);