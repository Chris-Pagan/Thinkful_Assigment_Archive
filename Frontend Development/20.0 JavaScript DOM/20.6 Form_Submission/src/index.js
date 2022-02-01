import "./index.css";

/*
 Your solution here
 */
function validateExists(value){
    return value && value.trim();
}


function validateForm(formData){
   const errors = {};
   if(!validateExists(formData.get("searchTerm"))){
     errors.name = "Please enter a search term"
   }
  return errors;
}


const submitHandler = (event) =>{
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const errs = validateForm(formData);
  
  if (Object.keys(errs).length >=1){
    const div = document.createElement("div");
    div.innerText = "Please enter a search term";
    div.classList.add("error");
    div.setAttribute("id", "searchError");
    form.appendChild(div);
  } else {
    const errorElements = document.querySelectorAll(".error");
    for (let element of errorElements){
      element.remove();
    }
  }
  const searchTerm = formData.get("searchTerm").toLowerCase();
  
  const h2List = document.querySelectorAll("h2");
  h2List.forEach((h2) => {
    const article = h2.closest("article");
    const h2InnerHTML = h2.innerHTML.toLowerCase();
    if (h2InnerHTML.includes(searchTerm)){
      article.classList.remove("hidden");
    } else{
      article.classList.add("hidden");
    }
  })
}

const main = () => {
  const form = document.querySelector("#searchForm");
  form.addEventListener("submit", submitHandler)
}

window.addEventListener("DOMContentLoaded", main);
