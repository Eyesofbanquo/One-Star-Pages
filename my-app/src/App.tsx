import React from "react";
import logo from "./logo.svg";
import mainLogo from "./friend_score_logo.png";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mainLogo} style={{ width: 200, height: 200 }} alt="logo" />
        <p>
          <code style={{ color: "black" }}>
            <b>Friend Score</b>
          </code>
        </p>
        <p>
          <i style={{ color: "black" }}>Everyone has a score</i>
        </p>
        <a
          style={{ color: "black" }}
          className="App-link"
          href="mailto:ms79723@gmail.com"
        >
          Contact for support
        </a>
      </header>
    </div>
  );
};

export default App;
