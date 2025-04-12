const arr = [3,-2, 1,2,7];
let n = arr.length;
let index = 0;

// find useless in array and add n+2 in that place
for( let i = 0; i< n; i++){
    if(arr[i] <= 0 || arr[i] > n){
        arr[i] = n + 2;
    }
}

// traverse
for( let i =0;i< n; i++){
    let val = arr[i];
    if(val <0) {
        val = val * -1;
    }
    val = val -1;
    if(val < n) {
        arr[val] = -1 * arr[val];
    }
}
console.log('updated arr =2', arr)

// find 1st index where positive number is there
for( let i=0; i< n; i++){
    if(arr[i] > 0){
      index = i;
      break;
    }
}

console.log('First missing natural number = ', index+1);