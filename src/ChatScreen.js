import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen(props) {

  const {name,message,profilePic,timestamp}=props.location.state;
  const [input,setInput]=useState('');
  const [messages, setMessages] = useState(message);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, {message : input }]);
    //TODO: add message in DB
    setInput('');
  }
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH {name} {timestamp=='Now'? "" : " ON 02/01/2021"}
      </p>
      {messages.map((message,index) => 
        index%2!=0 ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              src={profilePic}
              alt={name}
            />
            <p className="chatScreen__text">{message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message}</p>
          </div>
        )
      )}


        <form className="chatScreen__input">
          <input value={input} onChange={(e) =>setInput(e.target.value)} className="chatScreen__inputField" placeholder="Type a message" type="text"/>
          <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
          </form> 
          
    </div>
  );
}

export default ChatScreen;
