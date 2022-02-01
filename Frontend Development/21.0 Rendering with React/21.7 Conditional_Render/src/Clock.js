import React from "react";


function Clock() {

  const hours = new Date().getHours();
  if (hours < 12){
    return <h1>Good Morning!</h1>;
  } else if (hours < 18){
    return <h1>Good Afternoon!</h1>;
  } else{
    return<h1> Good Evening!</h1>
  }
 
}
export default Clock;