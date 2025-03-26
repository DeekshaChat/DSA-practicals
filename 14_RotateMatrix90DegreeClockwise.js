// Rotate a matrix 90 degree clockwise

let arr= [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];

let n = arr.length;
for(let i = 0;i<n;i++){
  for(let j=0;j<i;j++){
    let temp = arr[j][i];
    arr[j][i] = arr[i][j];
    arr[i][j] = temp;
  }
}

for(let i = 0;i< n; i++) {
  let start = 0;
  let end =n-1;
  while(start<end) {
    let temp = arr[i][start];
    arr[i][start] = arr[i][end];
    arr[i][end] = temp;
    // Swap elements - different approach
    // [arr[i][start], arr[i][end]] = [arr[i][end], arr[i][start]];
    start++;
    end--;
  }
}

console.log('Rotate matrix - 90 Degree clockwise:', arr);