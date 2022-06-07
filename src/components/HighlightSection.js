import React from "react";
import HighlightData from "../HighlightData";
import "../styles/HighlightSection.css";
import HighlightCard from "./HighlightCard";

function HighlightSection({refProp}) {
  return (
    <div className="highlight" ref={refProp}>
      <h3>Highlight</h3>
      
      <div className="card">
      {HighlightData.map((items)=>{
return(
<HighlightCard
images={items.images}
Description={items.Description}

/>

);

      })}
    </div>
    </div>
  );
}

export default HighlightSection;
