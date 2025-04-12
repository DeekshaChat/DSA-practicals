//Optimised approach
const arr = [0,0,0,0,0,0,0];
let n = arr.length;
let input = [[1,3],[4,2],[2,1],[1,-1],[0,5]];

// Replacing value at the index only
for(let i = 0; i< input.length; i++){
    let temp = input[i];
    let val = temp[1];
    let index = temp[0];
        arr[index] += val;
}
console.log('Array after replacing value:', arr);

// Creating Prefix sum array
for(let i=1; i< arr.length; i++){
    arr[i] = arr[i-1] + arr[i];
}
console.log('Beggars get amount as follows:', arr);