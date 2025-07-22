import React, { useState } from "react";

function App() {
  setInterval(currentTime,1000);
  let now = new Date().toLocaleTimeString();
  
  const [time, setTime] = useState(now);

  function currentTime(){
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
