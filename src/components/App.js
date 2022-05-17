import React, {useEffect, useState} from "react";
import AppRouter from "./Router";
import {authService} from "../myfirebase";
import Auth from "../routes/Auth";

function App() {  
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=> {
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  },[])

  return (
    <>
      { init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} nomad twitter</footer>
    </>
  );
}

export default App;
