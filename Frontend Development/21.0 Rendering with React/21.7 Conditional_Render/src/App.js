import React from "react";
import Clock from "./Clock";

function App({loggedIn}) {
  return (
    <>
      {loggedIn == true ? <Clock /> : null}
    </>
  );
}

export default App;
