import "./styles.css";

/**
  Write the addheadings() function here
*/
function addHeadings() {
  const articles = document.getElementsByTagName("article");
  for (let article of articles){
    let content = article.innerText; 
    article.innerHTML = `<h2>${content}</h2>`;
  }
}

/**
  Write the styleTutorialsAndArticles() function here
*/
function styleTutorialsAndArticles(){
  const articles = document.getElementsByTagName("article");
  for (let article of articles){
    if (article.innerText.includes("Tutorial")){
      article.classList.add("tutorial");
    } else {
      article.classList.add("article");
    }
  }
}

/**
  Write the separateAllTutorials() function here
*/
function separateAllTutorials() {
  const tutSection = document.createElement("section");///creates section 
  const articles = document.querySelectorAll('article')//select article first 
  
  tutSection.classList.add('tutorials');//set section to tutSection
  let tutorialList= document.querySelectorAll(".tutorials")
  
   //append content having class tutorial to tutorialList
  for (let article of articles) {
    if (article.innerHTML.includes("Tutorial")){
      tutSection.appendChild(article)
    };
  } 
  // now append new section to the class container
const contain = document.querySelector(".container");
contain.appendChild(tutSection)

}

/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
separateAllTutorials();
}

main();
