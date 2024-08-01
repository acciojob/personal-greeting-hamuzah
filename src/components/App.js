import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const[userName, setUserName] = useState('')
  
  return (
    <div className="App">
      <h1>Enter Your Name:</h1>
      <input type="text" onChange={(e)=>setUserName(e.target.value)}/>
         
        <p>Hello {userName}!</p> {/* display the greeting with the entered name */}
     
      
    </div>
  );
}

export default App