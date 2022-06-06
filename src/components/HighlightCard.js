import React from "react";
// import environ from "../images/environment.png";
 import "../styles/Highlightcard.css"
const HighlightCard=({images,Description})=> {

  return (
    <div className="sectioncards">
    <div className="images">
  <img src={images} alt=""  className="image"/>
</div>
<div className="describe">
 <p className="paras">{Description}</p>
</div>
</div>

  );
}

export default HighlightCard;
