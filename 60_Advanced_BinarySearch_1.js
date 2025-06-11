// "Given a sorted array(asc). Find the index of element K. Return -1 if it doesn't exists.

// Ex: 3, 6, 9, 12, 14, 19, 20, 23, 25, 27

// k = 20, ans = 6
// k = 21, ans -1"

const arr = [3, 6, 9, 12, 14, 19, 20, 23, 25, 27];
const k = 9;


let startIndex = 0;
let endIndex = arr.length - 1;
let n = parseInt((startIndex + endIndex) /2);
while (endIndex >= startIndex) {
    // console.log('while====',startIndex, endIndex,n );
    if(arr[n] === k) {
        console.log('Element found');
        break;
    } else {
        if(arr[n] > k) {
            endIndex = n -1;
            // n = (startIndex + endIndex)/2;
        } else {
            startIndex = n+1;
            // n = (startIndex + endIndex)/2;
        }
        
        n = parseInt((startIndex + endIndex) /2);
        if(startIndex === endIndex && arr[n] !== k) {
            console.log('Element not found');
        }
          
    }

}
