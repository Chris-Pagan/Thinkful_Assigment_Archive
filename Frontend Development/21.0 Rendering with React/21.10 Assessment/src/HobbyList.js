import React from "react";
import "./HobbyList.css";

function HobbyList({hobbies}) {
  if (hobbies.length <= 0){
    return null;
  } else{
  return(
    <div>
      <h4>Hobbies</h4> // You must use this heading for this component
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div> 
  )
  }
}

export default HobbyList;
