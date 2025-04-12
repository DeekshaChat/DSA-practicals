const arr = [  -2, -3, 4, -1, -2, 1, 5, -3];

let sum = 0;
let result = 0;
let startIndex = -1;
let endIndex = -1;
for(let i=0; i<arr.length; i++){
    sum += arr[i];
    if(sum > result){
        result = sum;
        endIndex = i;
    } 
    if(sum < 0) {
        sum =0;
        startIndex = i+1;
    }
}

console.log('Kadane-s Algorithm, Maximum sum sub-array index= ', startIndex, endIndex, result);
