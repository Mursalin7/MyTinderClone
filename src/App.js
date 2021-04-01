import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/chats/:person"
            render={routeProps => (
              <div>
                <Header backButton="/chats" />
                <ChatScreen {...routeProps} />
              </div>
            )}
          />
          >{/*             
          </Route> */}
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
