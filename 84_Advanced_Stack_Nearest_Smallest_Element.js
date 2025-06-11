// "Nearest Smallest Element.
// Array of size N. For every index i, find the index of next smaller element on left side.
// Ex:   4, 5, 2, 10, 3, 2
// O/p: -1, 4, -1, 2, 2, -1

// Ex:   4, 6, 10,  11, 7, 8, 3, 5
// O/p:  -1, 4, 6, 10, 6, 7, -1, 3
// "

let arr = [4, 5, 2, 10, 3, 2];
// let arr = [4, 6, 10,  11, 7, 8, 3, 5]
let new_arr = []
let small_arr = []

new_arr.push(-1)
small_arr.push(arr[0])
for( let i = 1; i< arr.length; i++) {
    if(arr[i] > arr[i-1]) {
        new_arr.push(arr[i-1])
        small_arr.push(arr[i])
    } else {
        let n = small_arr.length -1
        let val = small_arr[n]
        if(val > arr[i]) {
            console.log('if')
            while( small_arr.length > 0){
                console.log('here', small_arr)
                small_arr.pop()
                val = small_arr.length == 0 ? -1: small_arr[small_arr.length -1]
                // console.log('here')
                if((val < arr[i])) {
                    break
                }
            }
            console.log('------',val)
            if(small_arr.length == 0) {
                new_arr.push(-1)
            } else {
                new_arr.push(val)
            }
            small_arr.push(arr[i])
        } else {
            
                
            new_arr.push(val)
            small_arr.pop()
        }
        
    }
}
console.log(new_arr)