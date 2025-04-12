const arr = [[0, 0, 0, 1, 1], [0, 0, 0, 0, 1], [0 ,0, 1, 1, 1], [0, 0, 0, 0, 1],[0, 0, 0, 1, 1], [0, 0, 0, 1, 1]];

const n = arr.length;
const m = arr[0].length;

let i=0;
let j = m-1;
let maxOne = 0;
let result = 0;
while(i < n && j >=0) {
    if(arr[i][j] === 1){
        maxOne++;
        j--;
    }  else {
        i++;
    }
}

console.log('Max One in matrix=', maxOne)