//Optimised approach - Beggar Outside temple with start index and end index
const arr = [0,0,0,0,0,0,0];
let n = arr.length;
let input = [[2,4,2],[1,3,1],[0,2,3],[3,5,4]];

// Replacing value at the index only
for(let i = 0; i< input.length; i++){
    let temp = input[i];
    let val = temp[2];
    let startIndex = temp[0];
    let endIndex = temp[1];
    arr[startIndex] += val;
    arr[endIndex + 1] = arr[endIndex+1] - val;
}
console.log('Array after replacing value:', arr);

// Creating Prefix sum array
for(let i=1; i< arr.length; i++){
    arr[i] = arr[i-1] + arr[i];
}
console.log('Beggars get amount as follows:', arr);