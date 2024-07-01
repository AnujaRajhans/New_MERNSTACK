function prefixtopostfix(expression) {
    let stack = [];
    let operators = new Set(['+', '-', '*', '/']);
    let tokens = expression.split(' ').reverse();

    for(let token of tokens) {
        if(operators.has(token)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let postfixexpressions = `(${operand1} ${operand2} ${token} )`;
            stack.push(postfixexpressions);
        } 
        else {
            stack.push(token);
        }
    }
    return stack.pop();
}

const prefix = "* + A B - C D"  
const inprefix = prefixtopostfix(prefix);
console.log(inprefix);