import React, {useState} from "react";
import AppRouter from "./Router";
import {authService} from "../myfirebase";
import Auth from "../routes/Auth";

function App() {
  console.log(authService.currentUser);
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Auth/>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>nomad twitter</footer>
    </>
  );
}

export default App;
