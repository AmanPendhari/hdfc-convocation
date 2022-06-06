import React from "react";
import "../styles/SpeakersSection.css";
import Speaker from "./Speaker";
import speakersData from "../speakersData";

function SpeakersSection() {
  return (
    <div className="speakers">
      <div className="container">
        <p className="head">Speakers</p>

        {speakersData.map((speaker, index) => {
          return (
            <Speaker
              rtl={index % 2 != 0} // If index is odd e.g 1, 3, 5,... then we'll show right to left
              profile={speaker.profile}
              name={speaker.name}
              description={speaker.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpeakersSection;
