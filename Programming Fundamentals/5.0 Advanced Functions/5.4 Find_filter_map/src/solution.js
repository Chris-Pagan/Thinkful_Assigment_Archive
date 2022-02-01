const printNames = (names) => {
  names.forEach(element => {console.log(element);});
}

const logTreeType = (trees) => {
  trees.forEach(tree => {console.log(tree.type);});
}

const totalPoints = (points) => {
  // your solution here
  let total = 0;
  points.forEach(element => {total+=element;});
  return total;
}

function buildSentence(words) {
  // your solution here
  let result = ""
  words.forEach(word => {result += word+" ";});
  return result;
}

function logPercentages(decimals) {
  decimals.forEach(decimal => {console.log(decimal * 100 +"%");})
}

module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages,
};
