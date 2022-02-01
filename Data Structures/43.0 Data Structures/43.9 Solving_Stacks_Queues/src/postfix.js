const Stack = require("./lib/stack");

const evaluate = (expression) => {
    const newStack = new Stack();
    expression = expression.replace(/\s/g, "");
    expression.split("").forEach((value) =>{
        if (!"+-*/".includes(value)){
            newStack.push(Number(value))
        }
        if ("+-*/".includes(value)){
            let operator = value;
            let b = newStack.pop();
            let a = newStack.pop();
            let result = eval(`${a}${operator}${b}`)
            newStack.push(Number(result))
        }
    })
    return newStack.pop();
  };

module.exports = evaluate;