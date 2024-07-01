function balancedpara(expression) {
    let stack = [];
    let matchingpara = {
      ")": "(",
      "}": "{",
      "]": "[",
    };
  
    for (let char of expression) {
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else if (char === ")" || char === "}" || char === "]") {
        if (
          stack.length === 0 ||
          stack[stack.length - 1] !== matchingpara[char]
        ) {
          return false;
        }
        stack.pop();
      }
    }
    return stack.length === 0;
  }
  
  console.log(balancedpara("{[()]}"));
  console.log(balancedpara("{[(])}"));