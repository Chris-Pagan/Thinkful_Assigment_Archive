import "./styles.css";

/*
Add event listeners to the .expand_button buttons
*/
const expandButtonClickHandler = (event) => {
    const article =       event.target.parentNode.parentNode.parentNode;
  
  const article_body = article.querySelector('.article_body');
  
  if (event.target.innerText === '>') {
    article_body.style.display = 'block';
    event.target.innerText = 'V';
  } else {
    article_body.style.display = 'none';
    event.target.innerText = '>';
  }
};
function expandArticleBody() {
  const expandBtns = document.querySelectorAll('.expand_button');
  
  expandBtns.forEach((btn) => {
    btn.addEventListener('click', expandButtonClickHandler);
  });
}


/*
Add event listeners to the .highlightBtn buttons
*/
const highlightArticleClickHandler = (event) => {
//find article where button was clicked
  const  article = event.target.parentNode.parentNode.parentNode;
  const article_body = article.querySelector('.article_body');
 
//if text is + add highlight class and set text to -
  if (event.target.innerText === '+'){
    article.classList.add('highlight');
    event.target.innerText = '-'
  }
  
//if text not + remove highlight class set text to +
  else {
    article.classList.remove('highlight');
    event.target.innerText = '+'
  }
}

function highlightArticle() {
  const allButtons = document.querySelectorAll('.highlightBtn');
  allButtons.forEach(button => {
 button.addEventListener('click', highlightArticleClickHandler)
})
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
