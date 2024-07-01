function postfixtoprefix(expression) {
    let stack = [];
    let operators = new Set(['+', '-', '*', '/']);
    let tokens = expression.split(' ').reverse();

    for(let token of tokens) {
        if(operators.has(token)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let prefixexpressions = `( ${token} ${operand1} ${operand2})`;
            stack.push(prefixexpressions);
        } 
        else {
            stack.push(token);
        }
    }
    return stack.pop();
}

const prefix = "A B + C D - *"  
const inprefix = postfixtoprefix(prefix);
console.log(inprefix);