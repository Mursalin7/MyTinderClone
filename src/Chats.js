import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import { firebaseApp } from "./firebase";
import "./Chats.css";

function Chats() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    let newState = [];
    let newMessageState = [];
    const matchedRef = firebaseApp.database().ref("Matched");
    matchedRef.on("value", snapshot => {
      let items = snapshot.val();
      for (let item in items) {
        newState.push({
          name: items[item].name,
          url: items[item].url,
          messages: [],
          timing: "Now"
        });
      }
    });
    const messageRef = firebaseApp.database().ref("Messages");
    messageRef.on("value", snapshot => {
      let messagedPeople = snapshot.val();
      for (let item in messagedPeople) {
        newMessageState.push({
          name: messagedPeople[item].name,
          url: messagedPeople[item].url,
          messages: messagedPeople[item].messages,
          timing: messagedPeople[item].timing
        });
      }
    });
    const personArray = [...newState, ...newMessageState];
    setPersons(personArray);
  }, []);

  return (
    <div className="chats">
      {persons.map((each, index) => (
        <Chat
          key={index}
          name={each.name}
          message={each.messages}
          timestamp={each.timing}
          profilePic={each.url}
        />
      ))}
    </div>
  );
}

export default Chats;
