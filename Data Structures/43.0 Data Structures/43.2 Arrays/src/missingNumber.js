/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
    let currentNum = 1;
    let missingNum = 0;
    while (missingNum === 0){
        if (numbers.includes(currentNum)){
            currentNum++
        } else {
            missingNum = currentNum;
        }
    }
    return missingNum;
}


/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
    const nums = numbers.length + 1;
    let sum = 0;
    numbers.forEach((number) => sum += number)
    return (nums * (nums + 1)) /2 - sum;
}


module.exports = { missingNumberBruteForce, missingNumberSum };
