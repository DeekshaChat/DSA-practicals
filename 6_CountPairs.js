//count no of 'ag' pairs
let ar = ['b','a','a', 'g','d','c','a','g'];
// let ar = ['b','b','a', 'g','d','c','a','g'];
let answer = 0;
let countG = 0;
//find g occurance
for (let i = 0; i < ar.length; i++) {
  if(ar[i] === 'g') {
    countG++;
  }
}

for(let i = 0; i < ar.length; i++) {
  if (ar[i] === 'a') {
    answer += countG;
  } else if(ar[i] === 'g') {
    countG--;
  }
}
console.log('Count of ag pairs is:', answer);