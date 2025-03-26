// Given a square matrix. Find Transpose matrix inplace. SC: O(1)
let arr= [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];

for( let i = 0; i< arr.length; i++) {
  for(let j=0; j<i; j++) {
    let temp = arr[j][i];
    arr[j][i] = arr[i][j];
    arr[i][j] = temp;
  }
}

console.log('Transpose Square Matrix is:', arr);