// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    const lowerCase = input.toLowerCase();
    //checks if no shift, if shift is 0, less than -25 or more than 25
    if (!shift || shift < -25 || shift > 25 || shift === 0) {
      return false;
    }
    // changes shift to decoding mode
    if (!encode) shift *= -1;
    let result = "";
    //loops through input after converting to lowercase
    for (let i = 0; i < lowerCase.length; i++){
      let chr = lowerCase[i];
      //checks to see if character is part of alphabet
      if (chr.match(/[a-z]/)){
        let chrCode = lowerCase.charCodeAt(i) +shift;
        //checks character code of i and compares it to beginning and end of alphabet character codes
        if(chrCode > 122){
          chrCode = chrCode - 26;
        }
        if (chrCode < 97){
          chrCode =  chrCode + 26;
        }
        //adds shiftec character to the result
        let moddedChr = String.fromCharCode(chrCode);
        result += moddedChr;
      } else {
        //adds character to result if not in alphabet
        result += chr;
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
