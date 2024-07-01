function sort(stack) {
    if (stack.length === 0) {
      return;
    }
  
    let top = stack.pop();
    sort(stack);
    insertsorted(stack, top);
  }
  
  function insertsorted(stack, element) {
    if (stack.length === 0 || stack[stack.length - 1] <= element) {
      stack.push(element);
      return;
    }
    let top = stack.pop();
    insertsorted(stack, element);
    stack.push(top);
  }
  
  let stack = [3, 10, 1, 46, 5, 60, 457, 998, 99, 1000];
  sort(stack);
  console.log(stack);