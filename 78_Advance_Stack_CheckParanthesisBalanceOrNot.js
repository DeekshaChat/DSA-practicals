// "Check if given paranthesis sequence is balanced or not
// Ex: () : Yes
// ()(): YEs
// (()) : Yes
// )( : No
// ())( : No
// (() : No"

const val = '()';
let stack = [];
let balanced = -1;
let tempVal = true;

for(let i=0; i< val.length; i++) {
    const top = stack.length - 1  >= 0 && stack[stack.length - 1];
    if(val[i] === '(') {
        stack.push('(');
    } else if(val[i] === ')' && top === '(') {
        stack.pop();
    }
    if(val[i] === ')' && stack.length === 0 && !top) {
        // no element with open paranthesis first
        tempVal = false;
        break;
    }
}

if(!tempVal && stack.length === 0) {
    balanced = 0;
} else if( stack.length === 0) {
    balanced = 1;
} else {
    balanced = 0;
}

console.log('Given paranthesis sequence is balanced:', balanced === 0? 'False': 'True');