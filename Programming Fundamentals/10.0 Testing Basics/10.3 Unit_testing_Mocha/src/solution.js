/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/
function findStudentScoreByName(students, name) {
  // for (let i = 0; i < students.length; i++) {
  //   if (name === students[i].name) {
  //     return students[i].score;
  //   } else{
  //     return null;
  //   }
  // };
  const student = students.find(student =>
    student.name === name);
  if (!student) return null;
  return student.score;
};


module.exports = findStudentScoreByName;
