import React from "react";
import "../styles/Speaker.css";

function Speaker({ profile, name, description, rtl }) {
  return (
    <div className={`speaker ${rtl ? "rtl" : ""}`}>
      <img src={profile} alt="" className="profile" />
      <div className="info">
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default Speaker;
