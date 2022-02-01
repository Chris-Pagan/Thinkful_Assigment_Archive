import React from "react";
import ReactDOM from "react-dom";

const shirts = 4;
const pants = 6;
const website = <a href="https://www.thinkful.com/">Website</a>;




function App(){
  const element = (
      <main>
        <p className="paragraph">Purchased {shirts} shirts and {pants} pants for a total of {shirts + pants} items</p>
        {website}
      </main>
  );
  return element;

}

export default App;