import React, { useState } from "react";

function CountButton () {
  const [clickCount, setClickCount] = useState(0)
  return (
    <button onClick={() => setClickCount(clickCount +1 )}>Click Count: {clickCount}</button>
  )
}

export default CountButton;