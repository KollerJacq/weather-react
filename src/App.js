import React from "react";
import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <Weather city="Tokio" />
      </header>
    </div>
  );
}

export default App;
