// Write your tests here!
const partitionStudentsByScore = require("../src/solution");
const expect = require('chai').expect;

describe("partitionStudentsByScore", () => {
    const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
    ];
    it("should return an array of empty arrays if the students list is empty", () =>{
        let students = [];
        let expected = [[], []];
        let actual = partitionStudentsByScore(students, 12);
        expect(actual).to.eql(expected);
    });
    it("should place all students in one bucket if necessary", ()=>{
        let [lowScore, highScore] = partitionStudentsByScore(students, 10)
        expect(lowScore).to.have.deep.members(students);
        expect(highScore).to.be.empty;
    })
    it("should partition students by score", () =>{
        const [lowScore, highScore] = partitionStudentsByScore(students, 9);
        expect(lowScore).to.have.deep.members([
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 }
        ]);
        expect(highScore).to.have.deep.members([{ name: "Natalee Vargas", score: 9.2 }]);
    })
});

