// Given a rectangular matrix. Print all Diagonals.

let ar = [[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19]];
let n = 4;
let m = 5;

for( let i =0; i< n+m-1; i++) {
  for(let j=0; j<= i; j++){
    if(i-j < n && j<m) {
      console.log('Diagonal: ', i-j, j);   
    }
  }
  console.log('----------');
}