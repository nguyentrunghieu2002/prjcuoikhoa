import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NameCard from "./NameCard";
import App2 from "./App2";
import Homepage from "./Newproject/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <div style={{ backgroundColor: "yellow", fontSize: 18 }} className="name">
      Hello, World!
    </div>

    <App />
    <App2 />

    <NameCard name="Alice" age="20">
      <div>Inside a card</div>
      <div>Inside a card</div>
      <div>Inside a card</div>
      <div>Inside a card</div>
    </NameCard>
    <NameCard name="Bob" age="20">
      <div>Inside a card</div>
      <div>Inside a card</div>
      <div>Inside a card</div>
    </NameCard>
    <NameCard name="Cris" age="20" /> */}

    <Homepage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
