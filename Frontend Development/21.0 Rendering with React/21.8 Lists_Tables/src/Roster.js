import React from "react";

function Roster({ detailed, roster }) {
   if(detailed === false){
     const orderedList = roster.map(({firstName}, id) => (
        <li key={id}>{firstName}</li>
      ));
     return(
       <ol>{orderedList}</ol>
     );
   } else {
       const tableList = roster.map(({id, firstName, lastName,location }, index) =>(
          <tr key={index}>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{location}</td>
          </tr>
       ));
     return(
         <table>
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Location</th>
                 </tr>
             </thead>
             <tbody>{tableList}</tbody>
         </table>
     )
   }
}

export default Roster;
