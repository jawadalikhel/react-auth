import React from "react";
import Login from './Form';


var isLoggedIn = false;
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {
        isLoggedIn === true ? <h1>Hello</h1> : <Login userIsRegistered={userIsRegistered}/>
      }
    </div>
  );
}

export default App;
