// "Double Character Trouble. Remove adjacent same characters duplicate. Given a String, return the resultant string
// Ex:  a b b d => O/p: ad
// a b b c c d => O/p: ad
// a b c d d c b a => O/p: """""

const val = 'abcddcba';
let stack = [];

for(let i=0; i<val.length;i++) {
    const top = stack.length > 0 && stack[stack.length -1];
    if(stack.length === 0) {
        stack.push(val[i]);
    } else if(top === val[i]) {
        stack.pop();
    } else {
        stack.push(val[i]);
    }
}
console.log('Resultant string is:', stack);