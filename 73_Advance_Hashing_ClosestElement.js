// "Integer Array of N size:
// Find any pair (i, j) s.t i<j
// (j-i) is minimmum, and A[j] == A[i]
// Closest equal element.
// Ex: 1, 2, 3, 6, 1, 2, 3, 2, 1"

const arr = [1, 2, 3, 6, 1, 2, 3, 2, 1];
let map = new Map();
let distance = Infinity;
let closestEle;

for(let i = 0; i< arr.length;i++){
    if(!map.has(arr[i])) {
        map.set(arr[i], i);
    } else {
        let val = i - map.get(arr[i]);
        if(distance >= val){
            distance = val;
            closestEle = arr[i];
            console.log('in else if',map.get(arr[i]),  val);
        }
        map.set(arr[i], i); // updates the value of arr index so that distance can be found
    }
}
console.log(' Closest equal element=', closestEle, 'with distance = ', distance);