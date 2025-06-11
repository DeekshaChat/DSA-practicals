// "Given a sequence of paranthesis. You can reverse any paranthesis to make the whole string balanced. Reverse minimmum paranthesis and return the count.

// Ex: ( ( ( )  => O/p: 1
// ) ( ( ) => O/p: 2
// ( ( ) ) ) ( ) ) => O/p: 1"

const val = '( ( ) ) ) ( ) )';
let stack = [];
let count = 0;
for(let i = 0; i< val.length; i++) {
    const top = stack.length > 0 && stack[stack.length-1];
    if(val[i] === '(') {
        stack.push(val[i]);
    } else if(val[i] === ')' && top === '(') {
        stack.pop();
    }
    if(val[i] === ')' && !top) {
        count++;
        stack.push('(');
    }
}

count = stack.length === 0 ? count : count + stack.length -1;
console.log('Reverse minimmum paranthesis are:', count);