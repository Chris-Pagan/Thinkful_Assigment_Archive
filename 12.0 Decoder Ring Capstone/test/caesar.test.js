// Write your tests here!
let { expect } = require("chai");
let { caesar } = require("../src/caesar");

describe("caesar tests", () =>{
    it("should return false if shift is not present",()=>{
        let input = "space potato";
        let shift = undefined;
        let actual = caesar(input);
        expect(actual).to.be.false;
    })
    it("should return false if shift amout is above 25", ()=>{
        let input = "space potato";
        let shift = 26;
        let actual = caesar(input, shift);
        expect(actual).to.be.false;
    })
    it("should return false if shift amout is below -25", ()=>{
        let input = "space potato";
        let shift = -26;
        let actual = caesar(input, shift);
        expect(actual).to.be.false;
    })
    it("should encode a input by shifting the letters",() =>{
        let input = "space potato";
        let shift = 3;
        let actual = caesar(input, shift);
        let expected = "vsdfh srwdwr"
        expect(actual).to.eql(expected)
    })
    it("should leave spaces and other symbols as is",() =>{
        let input = "space potato";
        let shift = 3;
        let actual = caesar(input, shift);
        let expected = "vsdfh srwdwr"
        expect(actual).to.eql(expected)
    })
    it("should decode input if encode is false", ()=>{
        let input = "bpqa qa i amkzmb umaaiom";
        let shift = 8;
        let encode = false;
        let actual = caesar(input, shift, encode);
        let expected = "this is a secret message";
        expect(actual).to.eql(expected);

    })
})