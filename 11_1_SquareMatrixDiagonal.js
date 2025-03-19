// Given a square matrix. Print Diagonals
let ar= [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
let n = ar.length;
let m = ar[0].length;
if(n === m) {
    console.log('Its a square matrix');
}

console.log('Diagonal elements are:');
for( let i =0; i< n;i++){
    let j = n-1-i;
    console.log(ar[i][j])
}