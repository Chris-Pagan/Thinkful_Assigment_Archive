// Write your tests here!
const findStudentScoreByName = require("../src/solution");
const expect = require("chai").expect;

describe("findStudenScoreByName", () =>{
    const students = [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
    ];
    it("should return the score of the named student", () =>{
        let expected = 8.9;
        let actual = findStudentScoreByName(students, "Leo Yeon-Joo")
        expect(actual).to.equal(expected); 
    });
    it("should return null if incorrect student name is given", () =>{
        const input = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
        ];
        let expected = null;
        let actual = findStudentScoreByName(students, "John Smith")
        expect(actual).to.equal(expected); 
    });

})