import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const timestamps = [];
  const [times, setTime] = useState(timestamps);
  const displayTimeClicked = () => setTime([...times, Date.now()])

  return(
    <div>
      <ClickTimes timestamps={times} displayTimeClicked={displayTimeClicked}/>
      <TimestampsDisplay timestamps={times} />
    </div>
  )
  
}

export default App;
