// With space complexity O(n)
let ar = [3,-2,1,4,6,9,8];
let k = 50;
let n = ar.length;

let newAr = [];
for(let i = 0; i< n; i++){
    console.log(ar);
    newAr[(i+k)%n] = ar[i];
}

console.log(newAr);