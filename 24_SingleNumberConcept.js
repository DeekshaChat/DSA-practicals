// Single Number -III
// N array Elements. Every element occurs twice except 2 elements that occurs only once.
// Ex: 1,2,3,1,2,4.
// O/p: 3, 4

let arr = [1,2,3,1,2,4];

let xorOfArray = 0;
let count = 0;

let ithBit = 2;
let group1 = [];
let group2 = [];
let element1 = 0;
let element2 = 0;

// Taking XOR of all elements of array
for(let i = 0; i < arr.length; i++){
  xorOfArray = xorOfArray ^ arr[i];
}
console.log('Xor of array is:', xorOfArray);

//Divide in 2 groups
for(let i = 0;i< arr.length; i++) {
  if(xorOfArray & (arr[i] << ithBit)) {
    // Bit is OFF of Element at 1st position
    group2.push(arr[i]);
  } else {
    //Bit is ON of Element at 1st position
    group1.push(arr[i]);
  }
}

// XOR in each group
for(let i = 0;i< group1.length; i++) {
  element1 = element1 ^ group1[i];
}
for(let i = 0;i< group2.length; i++) {
  element2 = element2 ^ group2[i];
}

console.log('Unique elements are: ', element1, element2);
