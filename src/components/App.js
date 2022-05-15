import React, {useState} from "react";
import AppRouter from "./Router";
import {authService} from "../myfirebase";

function App() {
  console.log(authService.currentUser);
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>nomad twitter</footer>
    </>
  );
}

export default App;
