// "Print start and end index of all subarrays of size k
// ex: [3,4,2,-1,6,7,8,9,3,2,-1,4];
// k=3"

const arr = [3,4,2,-1,6,7,8,9,3,2,-1,4];
const k =3;
const n =arr.length;
for(let i=0; i< n;i++){
  let j=k+i-1;
  if(j<n){
    console.log(`Start and End Index of all Subarrays o Size ${k} is (${i},${j})`);
  } else {
    break;
  }
}