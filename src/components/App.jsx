import React, { use, useState } from "react";

function App() {

    const [fname,setFName] = useState("");
    const [lname,setLName]= useState("");
    const [headingText, setHeadingText]= useState("");

    function handleChange(event){
        setFName(event.target.value)
    }

    function handleLChange(event){
        setLName(event.target.value);
    }     

    function handleClick(event){
        setHeadingText(`${fname} ${lname}`);
        

        event.preventDefault();
    }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onClick={handleClick}>
        <input name="fName" placeholder="First Name" 
            onChange={handleChange}
            value={fname}
        />
        <input name="lName" placeholder="Last Name" 
            onChange={handleLChange}
            value={lname}
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
