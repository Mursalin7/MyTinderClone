import React from "react";
import Chat from './Chat';
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat 
      name ="Kylie"
      message = "Hey!!"
      timestamp="2 days ago"
      profilePic="http://www.gstatic.com/tv/thumb/persons/532961/532961_v9_bd.jpg"
      />
      <Chat 
      name ="Kim"
      message = "Oh! that was great"
      timestamp="3 days ago"
      profilePic="https://variety.com/wp-content/uploads/2020/10/kim-kardashian-west-1.jpg?w=681&h=383&crop=1"
      />
      <Chat 
      name ="Jennifer"
      message = "Hello"
      timestamp="5 days ago"
      profilePic="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-jennifer-lawrence-hair-index-1557773479.jpg?crop=0.501xw:1.00xh;0.500xw,0&resize=640:*"
      />
    </div>
  );
}

export default Chats;
