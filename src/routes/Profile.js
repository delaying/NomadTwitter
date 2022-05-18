import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authService, dbService } from "../myfirebase";

function Profile({userObj}){
    const hisroty = useHistory();
    const onLogOutClick = ()=> {
        authService.signOut();
        hisroty.push("/");
    };
    const getMyNweets = async()=>{
        const nweets = await dbService.collection("nweets").where();
    }

    useEffect(()=>{
        getMyNweets();
    }, []);

    return(
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}

export default Profile;