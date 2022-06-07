import React, { useState } from "react";
import "../styles/Nav.css";
function Nav({refProp, onRegisterClick, onSpeakerClick, onHighlightClick}) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Nav" ref={refProp}>
      <div className="navbtn">
        <button
          onClick={() => {
            setSelected(0);
            onRegisterClick();
          }}
          className={`btn ${selected == 0 ? "selected" : ""}`}
        >
          Register
        </button>
        <button
          onClick={() => {
            setSelected(1);
            onSpeakerClick();
          }}
          className={`btn ${selected == 1 ? "selected" : ""}`}
        >
          Speaker
        </button>
        <button
          onClick={() => {
            setSelected(2);
            onHighlightClick();
          }}
          className={`btn ${selected == 2 ? "selected" : ""}`}
        >
          Highlight
        </button>
      </div>
    </div>
  );
}

export default Nav;
