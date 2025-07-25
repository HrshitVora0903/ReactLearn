import React, { useState } from "react";
import { preconnect } from "react-dom";

function App() {

  const [task,setTask] = useState("");
  const [items,setItemList] = useState([]);


  function handleChange(event){
    setTask(event.target.value);
  }

  function handleClick(event){
    setItemList( pervItems => {
      return [...pervItems, task];
    });
    setTask("");
  }



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" 
          onChange={handleChange}
          value={task}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         {items.map(item => <li>{item}</li> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
