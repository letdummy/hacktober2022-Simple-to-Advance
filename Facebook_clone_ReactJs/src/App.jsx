import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Header from "./Header.jsx";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login.jsx";

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="app">
      {!user ? (
        <Login stateChanger={setUser} />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed className="feed" />
            <Widgets className="widgets" />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
