import React, { useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import SpeakersSection from "./components/SpeakersSection";
import HighlightSection from "./components/HighlightSection";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Main/>
      <SpeakersSection/>
      <HighlightSection/>
     
    </div>
  );
}
