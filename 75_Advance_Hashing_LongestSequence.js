// "Array of n size. Find largest/longest sequence which can be rearranged to get consecutive elements.

// Ex: 100, 4, 3, 6, 10, 20, 11, 5, 101

// O/P: 4"

const arr = [100, 4, 3, 6, 10, 20, 11, 5, 101];
let map = new Map();
// let val = arr[i];
let count=1;
let answer=1;
for(let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
}

    
for(let i = 0; i < arr.length; i++) {
    let val = arr[i] - 1;
    while(map.has(val)){
        // do nothing
        count++;
        val = val -1;
    } 
answer = Math.max(answer, count);
count = 1;
}
console.log('Largest/Longest sequence which can be rearranged to get consecutive elements is:', answer);