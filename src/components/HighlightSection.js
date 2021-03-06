import React from "react";
import HighlightData from "../HighlightData";
import "../styles/HighlightSection.css";
import Footer from "./Footer";
import HighlightCard from "./HighlightCard";

function HighlightSection() {
  return (
    <>
    <div className="highlight">
      <h3>Highlight</h3>
      </div>
      
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
    <Footer/>
    </>
  );
}

export default HighlightSection;
