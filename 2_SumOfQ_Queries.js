// Given array of n elements, Q queries, each query is of form [l,r]. 
// Calculate sum of elements in range [l,r] inclusive of index l and r.

// Brute Force
let ar = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];
let q = [ [4,8],[3,7],[1,3],[0,4],[6,9],[7,7]];
for(let i = 0; i< q.length; i++){
    let l = q[i][0];
    let r = q[i][1];
    let sum = 0;
    for(let i = l; i<=r ; i++){
        sum += ar[i];
    }
    console.log('sum is=', sum);
}


//SC = O(1)
//TC = O(q*n)