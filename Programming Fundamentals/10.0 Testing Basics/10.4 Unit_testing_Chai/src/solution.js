/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
  const student = students.find(student =>
    student.name === name);
  if (!student) return null;
  return student;
}

module.exports = findStudentByName;
