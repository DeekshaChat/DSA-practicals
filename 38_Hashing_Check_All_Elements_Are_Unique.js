// "N elements, check if all the elements are unique or not?
// ex: [6,3,7,3,8,6,9];"


// const arr= [6,3,7,3,8,6,9];
const arr= [1,3,7,4,8,6,9];
let arrSet = new Set();
for (let i = 0; i< arr.length; i++){
    arrSet.add(arr[i]);
}

if(arr.length === arrSet.size){
    console.log('All elements are unique');
} else {
    console.log('All elements are not unique');
}