import React, { useEffect, useRef } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import SpeakersSection from "./components/SpeakersSection";
import HighlightSection from "./components/HighlightSection";
import Footer from "./components/Footer";

function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

export default function App() {
  const navRef = useRef(null);
  const mainRef = useRef(null);
  const speakersRef = useRef(null);
  const hightlightsRef = useRef(null);

  const scrollTo = (ref)=>{
    const rect = offset(ref.current)
    const navRect = navRef.current.getBoundingClientRect()
    console.log(rect, navRect)
    window.scrollTo({
      left:0, 
      top:rect.top - navRect.height,
      behavior:'smooth'
    })  
  }

  
  const scrollToRegister = () => {
    scrollTo(mainRef)
  }
  const scrollToSpeakers = () => {
    scrollTo(speakersRef)
  }
  const scrollToHighlights = () => {
    scrollTo(hightlightsRef)
  }
  return (
    <div className="App">
      <Header />
      <Nav
        refProp={navRef}
        onRegisterClick={scrollToRegister}
        onSpeakerClick={scrollToSpeakers}
        onHighlightClick={scrollToHighlights}
      />
      <Main refProp={mainRef} />
      <SpeakersSection refProp={speakersRef} />
      <HighlightSection refProp={hightlightsRef} />
      <Footer/>
    </div>
  );
}
