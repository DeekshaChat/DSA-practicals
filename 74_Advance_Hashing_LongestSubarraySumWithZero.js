// "Array of n size. All Integers.
// Length of longest subarray with sum = 0.

// Ex: 2, 2, 1, -3, 4, 3, 1, -8, 6, -2, -1"

const arr = [2, 2, 1, -3, 4, 3, 1, -8, 6, -2, -1];
let psArr = [];
let arrLength = 0;
let map = new Map();
for( let i = 0; i < arr.length; i++) {
    if(i === 0) {
        psArr.push(arr[i]);
    } else {
        const val = psArr[i-1] + arr[i];
        psArr.push(val);
    }
}

map.set(0, -1);
for( let i = 0; i < psArr.length; i++) {
    if(map.has(psArr[i])) {
        const oldVal = map.get(psArr[i]);
        arrLength = Math.max(i - oldVal, arrLength);
    } else {
        map.set(psArr[i], i);
    }
}

console.log('Length of longest subarray with sum = 0 is', arrLength);