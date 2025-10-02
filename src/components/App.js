
import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn,setLoggedIn] = useState(false);
   
  const handlefunction=()=>{
       setLoggedIn(true);
  }
  return (
    <div style={{margin:'150px'}}>
        <h1>Parent Component</h1>
        {isLoggedIn? (
          <h2>You are Logged in.</h2>
        ) : (<LoginForm onLogin={handlefunction}/>)
        }
    </div>
  )
}

export default App
