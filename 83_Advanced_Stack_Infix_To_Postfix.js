// "Convert an infix expression to postfix expression.
// Ex: Infix: A + B * C + D
// O/p: ABC*+D+"
const val = 'A+B*C+D';
// const val = 'A*B/C'; // AB*C/
// const val = 'A+B*C/D'; // op: ABC*+D/
let stack = [];
let op;
let answer='';

for(let i = 0; i< val.length; i++) {
console.log(i, '==============================', val[i]);
if(val[i] === '+' || val[i] === '-' || val[i] === '*' || val[i] === '/') {
    let top = stack.length > 0 && stack[stack.length-1];
    if(stack.length == 0) {
        stack.push(val[i]);
    } else {
        if((top === '*' || top === '/') && (val[i] == '+' || val[i] == '-' || val[i] == '*' || val[i] == '/')){
             while(stack.length > 0){
                answer+= top;
                stack.pop();
                top = stack.length > 0 && stack[stack.length-1];
            }
            stack.push(val[i]);
        } else if((top === '+' || top === '-') && (val[i] == '+' || val[i] == '-')){
             while(stack.length > 0){
                answer+= top;
                stack.pop();
                top = stack.length > 0 && stack[stack.length-1];
            }
            stack.push(val[i]);
        } else {
            stack.push(val[i]);
        }
    }
} else {
    answer+=val[i];
}

}
if(stack.length == 1) {
    top = stack[0];
    answer+= top; 
    stack.pop();
}

console.log('Postfix expression =', answer)