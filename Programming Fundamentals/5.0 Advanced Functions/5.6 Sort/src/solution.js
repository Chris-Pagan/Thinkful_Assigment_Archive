function sortWords(words) {
    let sorted = words.sort((wordA, wordB) => wordA.toLowerCase() > wordB.toLowerCase() ? 1:-1 )
  return sorted;
}

function sortNumbers(numbers) {
    let sortedNum = numbers.sort((num1, num2) => num1 > num2 ? 1: -1);
  return sortedNum;
}

function largestFirst(numbers) {
  let sortedNum = numbers.sort((num1, num2) => num1 < num2 ? 1: -1);
  return sortedNum;
}

function sortFlowersByZone(flowers) {
  let flowerByZone = flowers.sort((flowerA, flowerB) => flowerA.zone > flowerB.zone ? 1: -1);
  return flowerByZone;
}

function sortByLength(strings) {
  let strLen = strings.sort((strA, strB) => strA.length > strB.length ? 1: -1);
  return strLen;
}

module.exports = {
  sortWords,
  sortNumbers,
  largestFirst,
  sortFlowersByZone,
  sortByLength,
};