import React, { useState } from "react";
import App from "./App";
import LoginPanel from "./LoginPanel";

function Main() {
    const [isLogged, setLogged] = useState(false);
    const [loggedName, setLoggedName] = useState("");

    function handleLogin(name) {
        setLogged(true);
        setLoggedName(name);
      }
      
      return (
        <div>
          {!isLogged ? (
            <LoginPanel onLogin={handleLogin}/>
          ) : (
            <App loggedName={loggedName}/>
          )}
        </div>
      );
}

export default Main