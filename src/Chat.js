import React from "react";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import "./Chat.css";

function Chat({name,message,timestamp,profilePic}) {
    return (
    <Link to={{
      pathname:`/chats/${name}`,
      state: {name,profilePic,message,timestamp}
  }} >
    <div className="chat">
    <Avatar className="chat__image" src={profilePic} alt={name}/>
    <div className="chat__details">
        <h2>{name}</h2>
        {message.length > 1 ? <p>{message[message.length-1]}</p> : <h5>Start messaging</h5>}
    </div>
    <p className="chat__timestamp">{timestamp}</p>
    </div>
    </Link>
  );
}

export default Chat;
