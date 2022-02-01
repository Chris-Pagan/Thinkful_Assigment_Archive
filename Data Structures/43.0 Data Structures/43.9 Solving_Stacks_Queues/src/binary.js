const Queue = require("./lib/queue")

const binary = (max) => {
  const nums = new Queue();
  nums.enqueue("1");
  let resultArr = []
  for (let i = 1; i <= max; i++){
    let newNum = nums.dequeue();
    resultArr.push(newNum);
    nums.enqueue(newNum.concat("0"))
    nums.enqueue(newNum.concat("1"))
  }
  return resultArr
};

module.exports = binary;
