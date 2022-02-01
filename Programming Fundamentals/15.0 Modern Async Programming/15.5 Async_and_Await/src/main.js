const { welcome, goodbye, tell } = require("../utils/fortune-teller");

async function getFortune(question) {
  try {
        const resp = await tell(question); 
        console.log(`Your question was: ${question}`);
        console.log(`Your fortune is: ${resp}`);
      } catch(err) {
      console.log(`There was an error: ${err}`);
    };
}

async function fullSession(question) {
  try {
    const welcomeResponse = await welcome();
    console.log(welcomeResponse);
    const fortuneResponse = await getFortune(question);
    const goodbyeResp = await goodbye();
    console.log(goodbyeResp);
  } catch (err){
    console.log(`There was an error: ${err}`);
  }
}

module.exports = { getFortune, fullSession };
