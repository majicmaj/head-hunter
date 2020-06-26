import React from "react";
import Switch from "react-router-dom";
import "./styles.css";

import Nav from "./components/nav/Nav";
import Routes from "./components/routes/Routes";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
    </div>
  );
}
