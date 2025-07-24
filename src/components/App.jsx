import React, { use, useState } from "react";
function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event){
    const newValue = event.target.value;
    const inputName =event.target.name;

    setFullName (preValue => {
      if (inputName === "fName"){
        return {
          fName: newValue,
          lName:preValue.lName
        }
      }else if( inputName === "lName"){
        return {
          fName: preValue.fName,
          lName: newValue
        }
      }
    });

  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      {/* <p>{contact.email}</p> */}
      <form>
        <input name="fName" placeholder="First Name" 
          onChange={handleChange}
          value={fullName.fName}
        />
        <input name="lName" placeholder="Last Name" 
          onChange={handleChange}
          value={fullName.lName}
        />
        <input name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
