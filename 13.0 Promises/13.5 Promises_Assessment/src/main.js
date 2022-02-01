const { welcome, goodbye, tell } = require("../utils/fortune-teller");
const question = "Will I ace my job interview?";

function getFortune(question) {
      return tell(question).then((fortune) =>{
        let arr = [
        `Your question was: ${question}`, 
            `Your fortune is: ${fortune}`
        ]
        return arr;
    }).catch(err => `There was an error: ${err}`);
}

function fullSession(question) {
      return welcome().then((welcomeMessage) =>{
       return getFortune(question).then((questionAndAnswer) =>{
            let messages = [welcomeMessage].concat(questionAndAnswer);
            return messages;
        }).then((message)=>{
            return goodbye().then((goodbyeMessage) =>{
                return message.concat(goodbyeMessage);
            })
        })
    })
}

module.exports = { getFortune, fullSession };
