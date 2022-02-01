/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  if (students === []) return [[],[]];
  let lowScoreArr = [];
  let highScoreArr = [];
  let newArr = [];
  for (let student of students){
    if(student.score < score){
      lowScoreArr.push(student);
    } else if (student.score > score){
      highScoreArr.push(student);
    }
  }
  newArr.push(lowScoreArr);
  newArr.push(highScoreArr);
  return newArr;
}

module.exports = partitionStudentsByScore;
