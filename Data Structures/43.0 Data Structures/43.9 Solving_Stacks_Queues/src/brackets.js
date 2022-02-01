const Stack = require("./lib/stack");

const match = (expression) => {
  const newStack = new Stack();
  for (let i = 0; i < expression.length; i++){
    switch (expression[i]) {
      case "(":
      case "[":
      case "{":
        newStack.push(expression[i]);
        break;
      case ")":
        if (newStack.top?.value === "("){
          newStack.pop();
        } else return false
        break;
      case "]":
        if (newStack.top?.value === "["){
          newStack.pop();
        } else return false;
        break;
      case "}":
        if (newStack.top?.value === "{"){
          newStack.pop();
        } else return false;
    }
  }
  return !newStack.top;
};

module.exports = match;
