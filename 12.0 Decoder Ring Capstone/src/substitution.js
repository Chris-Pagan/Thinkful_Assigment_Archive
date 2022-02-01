// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let repeatCheck = /(.).*\1/.test(alphabet);
    if (repeatCheck) return false; //returns false if any characters in alphabet repeat
    if (!alphabet || alphabet.length > 26 || alphabet.length < 26) return false;
    const enteredAlphabet = alphabet.split(""); 
    const normalAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
      "p","q","r","s","t","u","v","w","x","y","z"];


    function encodeDecode(enteredAlphabet, normalAlphabet) {
      let result = ""; 
      let message = input.toLowerCase();
      for (let text = 0; text < message.length; text++) {
        let letter = message[text];
        if (letter.match(/[^ ]/)) {
          let num = enteredAlphabet.indexOf(letter); //look up index of letter
          result += normalAlphabet[num]; //add number with matching index to the code
        } else {
          result += letter; //character is a space, maintain spaces
        }
      }
      return result; //return code
    }

    if (encode) {
      //this block encodes a message
      let final = encodeDecode(normalAlphabet, enteredAlphabet);
      return final;
    } else {
      //this block of code decodes a message
      let final = encodeDecode(enteredAlphabet, normalAlphabet);
      return final;
    }
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
