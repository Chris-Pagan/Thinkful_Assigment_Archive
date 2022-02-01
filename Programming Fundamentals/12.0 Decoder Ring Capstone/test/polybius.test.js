// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");
describe("polybius", () => {
    it("should return 11 when given a", () =>{
        let input = "a"; 
        let expected = "11";
        let actual = polybius(input)
        expect(actual).to.eql(expected)
    });
    it("should return time to fly when given 44422351 4443 121345", () => {
        let input = "44422351 4443 121345";
        let expected = "t(i/j)me to fly";
        let encode = false;
        let actual = polybius(input, encode);
        expect(actual).to.equal(expected);
      });
      it("when encoding, translates i and j to 42", () => {
        let input = "i j";
        let expected = "42 42";
        let encode = true;
        let actual = polybius(input, encode);
        expect(actual).to.equal(expected);
      });
      it("should ignore capital letters", () => {
        let input1 = "back to the future";
        let encode = true;
        let input2 = "BACK TO THE FUTURE";
        let actual = polybius(input1, encode);
        let expected = polybius(input2, encode);
        expect(actual).to.equal(expected);
      });
      it("should maintain spaces when decoding", () => {
        let input = "44422351 4443 121345";
        let expected = "t(i/j)me to fly";
        let encode = false;
        let actual = polybius(input, encode);
        expect(actual).to.equal(expected);
      });
      it("should maintain spaces when encoding", () => {
        let expected = "44422351 4443 121345";
        let input = "time to fly";
        let encode = true;
        let actual = polybius(input, encode);
        expect(actual).to.equal(expected);
      });
      it("should return false if number of digits is odd when decoding", () => {
        let input = "3251131343 254324134";
        let encode = false;
        let actual = polybius(input, encode);
        expect(actual).to.be.false;
      });
    
})