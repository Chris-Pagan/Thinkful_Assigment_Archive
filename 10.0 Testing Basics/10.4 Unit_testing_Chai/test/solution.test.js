// Write your tests here!
const findStudentByName = require("../src/solution");
const expect = require('chai').expect;

describe("findStudentByName", () =>{
    const students = [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
      ];
    it("should return the full object if a student name is given", () =>{
        let expected = {name: "Natalee Vargas", score: 9.2};
        let actual = findStudentByName(students, "Natalee Vargas");
        expect(actual).to.eql(expected);
    });
    it("should return null if incorrect name given", () =>{
        let expected = null;
        let actual = findStudentByName(students, "Nintendo Switch");
        expect(actual).to.be.null;
    });

})
