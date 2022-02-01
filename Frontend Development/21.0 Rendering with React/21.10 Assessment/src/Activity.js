import React from "react";
import "./Activity.css";

function Activity({items}) {

  const rows = items.map(({time, description}, index) =>(
    <tr key={index}>
      <td>{time}</td>
      <td>{description}</td>
    </tr>
  ));
  return(
    <table>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default Activity;
