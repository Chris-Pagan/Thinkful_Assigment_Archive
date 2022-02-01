/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
    let sortedArr = words.map(item => item.split('').sort().join(''));
    let setArr = new Set(sortedArr);
    let reducedObj = {};
    for (let setItem of setArr) {
      let indexArr = sortedArr.reduce((acc, cur, index) => {
        if (setItem === cur) {
          acc.push(index);
        }
        return acc;
      }, []);
      reducedObj[setItem] = indexArr;
    }
    let finalArr = [];
    for (let reduceItem in reducedObj) {
      finalArr.push(reducedObj[reduceItem].map(item => words[item]));
    }
    return finalArr; 
}

module.exports = anagramGroups;
