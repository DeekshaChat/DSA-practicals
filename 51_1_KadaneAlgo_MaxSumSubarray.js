const arr = [  -2, -3, 4, -1, -2, 1, 5, -3];

let sum = 0;
let result = 0;
for(let i=0; i<arr.length; i++){
    sum += arr[i];
    result = Math.max(sum, result);
    if(sum < 0) {
        sum =0;
    }
}

console.log('Kadane-s Algorithm, Maximum sum sub-array = ', result);
