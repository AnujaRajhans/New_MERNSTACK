function evalpostfix(expression){

    let stack = [];

    let tokens = expression.split(' ');




    for (let token of tokens) {

        if(!isNaN(token)) {

            stack.push(Number(token));

        }

        else{

            let b = stack.pop();

            let a = stack.pop();




            switch(token){

                case '+':

                    stack.push(a+b);

                    break;

                case '-':

                    stack.push(a-b);

                    break;

                case '*':

                    stack.push(a*b);

                    break;

                case '/':

                    stack.push(a/b);

                    break;

                default:

                    throw new Error (`Unknown operator : ${token}`);

            }

        }

    }

    if(stack.length!==1){

        throw new Error('Invalid expression');

    }

    return stack.pop();

}




const expression = "2 3 1 * + 9 -";

const result = evalpostfix(expression);

console.log(result);