// "Is this balanced?
// [(){}]
// O/P: No"
// const val = '[(){]}';
const val = '[}{(])';
let stack = [];
let index = -1;
for(let i = 0; i< val.length; i++) {
    const top = stack.length > 0 && stack[stack.length -1];
    if(val[i] === '[' || val[i] === '(' || val[i] === '{'){
        stack.push(val[i]);
    } else if((val[i] === ')' || val[i] === '}') && (top === '(' || top === '{')){
        stack.pop();
    }
    
    if(val[i] === ']'){
        if(top === '['){
            stack.pop();
        }
        index = i;
        break;
    }
}

if(stack.length !== 0) {
    console.log('Given value is not balanced');
} else if(val.length -1 === index) {
    console.log('Given value is balanced');
} else {
    console.log('Given value is not balanced');
}