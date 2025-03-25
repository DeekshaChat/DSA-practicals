const arr = [0,4,2,2,6,2,4];
arr.sort();
console.log('arr===',arr )
let newArr= [];
let tempVal = 1;
 newArr.push(0);
for(let i=1; i< arr.length; i++) {
  const temp = newArr[i-1];
  if(arr[i] === arr[i -1]) {
    newArr.push(newArr[i-1]);
  } else {
    console.log('here===',tempVal);
    newArr.push(i);
    // tempVal = i;
  }
}
console.log('new arr is:', newArr)

for(let i=0; i< newArr.length; i++) {
  if(newArr[i] === arr[i]) {
    console.log('Nobel integer is: ', newArr[i]); 
  }
}
