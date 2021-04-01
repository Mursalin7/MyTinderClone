import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import {database,firebaseApp} from "./firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("People")
      .onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data())));

    return () => {
      unsubscribe();
    };
  }, []);

  const swiped = (direction, name, url) => {
    if (direction === 'right'){
      const matchedRef = firebaseApp.database().ref('Matched');
      const item = {name, url}
      matchedRef.push(item);
    }
  }
  return (
    <div>
      <div className="tinderCards_cardContainer">
        {people.map(person => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name, person.url)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
