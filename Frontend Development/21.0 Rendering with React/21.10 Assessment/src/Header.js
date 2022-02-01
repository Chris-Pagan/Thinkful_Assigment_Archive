import React from "react";
import "./Header.css";

function Header({name, birthday, imageSrc}) {
  return (
    <header>
      <div>
        <img src={imageSrc}/>
        <p>{name}</p>
        <p>{birthday}</p>
      </div>
    </header>
  )
}

export default Header;
