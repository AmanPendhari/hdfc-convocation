import React from "react";
import "../styles/Main.css";
import convovideo from "../images/convocation_video.png";
import playbtn from "../images/play_button.png";

function main() {
  return (
    <div className="main">
      <p>
        A unique
        <span>
          &nbsp;virtual convocation on the <br />
          Metaverse&nbsp;
        </span>
        to celebrate the Bounce Back Batch of 2022. <br />
        Join the fun on <span> 22nd May, 4pm onwards.</span>
      </p>
      <div className="videocontainer">
        <div className="blurcontainer">
          <img src={convovideo} alt="" className="convo" />
        </div>
        <img src={playbtn} alt="" className="playbtn" />
      </div>
      <div className="paragraph">
        <p>
          This event is to honour all the students, teachers and family <br />{" "}
          members of the BounceBack Batch. Register now to take part in this
          exciting event.
        </p>
      </div>
      <button className="click">Click To Register</button>
    </div>
  );
}

export default main;
