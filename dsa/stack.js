const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stack = [];

function mainMenu() {
  console.log("\n*************** Stack Operation Using Array ********");
  console.log("1. Push \n2. Pop \n3. Show \n4. Exit");
  rl.question("Enter your choice : ", (choice) => {
    if (choice === "1") {
      push();
    } else if (choice === "2") {
      pop();
    } else if (choice === "3") {
      show();
    } else if (choice === "4") {
      exit();
    } else {
      console.log("You must choose a valid option.");
      mainMenu();
    }
  });
}

function push() {
  console.log("\n*************** Push Operation Called ********");
  rl.question("Enter the element to push : ", (element) => {
    stack.push(element);
    console.log("Element Pushed Successfully");
    show();
  });
}

function pop() {
  console.log("\n*************** Pop Operation Called ********");
  if (stack.length === 0) {
    console.log("Stack is empty. No element to pop.");
  } else {
    stack.pop();
    console.log("Element Popped Successfully");
  }
  show();
}

function show() {
  console.log("\n*************** Show Operation Called ********");
  if (stack.length === 0) {
    console.log("Stack is empty.");
  } else {
    for (let i = stack.length - 1; i >= 0; i--) {
      console.log(stack[i]);
    }
  }
  mainMenu();
}

function exit() {
  console.log("Exiting the program.");
  rl.close();
}

mainMenu();