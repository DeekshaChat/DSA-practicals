//brute force
const arr = [0,0,0,0,0,0,0];
let n = arr.length;
let input = [[1,3],[4,2],[2,1],[1,-1],[0,5]];

for(let i = 0; i< input.length; i++){
    let temp = input[i];
    let val = temp[1];
    let index = temp[0];
    for(let j=index; j<n; j++){
        arr[j] += val;
    }
}

console.log('after distribution = ', arr);