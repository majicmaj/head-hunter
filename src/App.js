import React from "react";
import Switch from "react-router-dom";
import "./styles.css";

import Nav from "./components/nav/Nav";
import Routes from "./components/routes/Routes";
import Footer from "./components/footer/Footer";

const mockListings = [
  { title: "SDE I", company: "AWS" },
  { title: "SDE II", company: "AWS" },
  { title: "SWE II", company: "Google" }
];

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes listings={mockListings} />
      <Footer />
    </div>
  );
}
