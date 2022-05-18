import React, { useEffect, useState } from "react";
import { dbService } from "../myfirebase";


function Home(){
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const getNweets = async () => {
        const dbNweets = await dbService.collection("nweets").get();
        dbNweets.forEach((document)=> {
            const nweetObject = {
                ...document.data(),
                id:document.id,
            };
            setNweets((prev)=> [document.data(), ...prev]);
        });
    };
    useEffect(()=>{
        getNweets();
    },[]);

    const onSubmit = async(event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            nweet,
            createdAt : Date.now(),
        });
        setNweet("");
    };
    const onChange = (event) => {
        const {target : {value},} = event;
        setNweet(value);
    };

    return(
        <>
            <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120}/>
                <input type="submit" value="Nweet"/>
            </form>
        </>
    )
}

export default Home;

