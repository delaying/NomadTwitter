import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../myfirebase";

function Profile(){
    const hisroty = useHistory();
    const onLogOutClick = ()=> {
        authService.signOut();
        hisroty.push("/");
    };
    return(
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}

export default Profile;