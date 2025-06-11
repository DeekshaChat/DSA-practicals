// "Every element occurs twice, except for 1 element. Find unique element.
// Note: Duplicate element are together.

// Ex: 3, 3, 1, 1, 8, 8, 10, 10, 9, 6, 6, 2, 2, 4, 4


// Ans: 9"

const arr = [3, 3, 1, 1, 8, 8, 10, 10, 9, 6, 6, 2, 2, 4, 4];

let l = 0;
let r = arr.length -1;


let mid;
while(l <= r) {
    
    mid = Math.floor((l+r)/2);
    
    if((mid === 0 || arr[mid] !== arr[mid+1]) && (mid === arr.length -1 || arr[mid] !== arr[mid-1])) {
        break;
    }
    // console.log('l=', l, 'r=', r, 'mid=', mid);
    if( arr[mid] === arr[mid-1]){
        // unique element will be ahead
         l = mid + 1;
    } 
    else if( arr[mid] === arr[mid+1]){
        // unique element will be behind
        r = mid - 1;
    }

}

console.log('Unique element is at index: ', mid)
