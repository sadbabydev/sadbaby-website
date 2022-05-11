import React from "react";
import home from "../assets/home.png";
import '../css/sections/_home.css';


export default function Home() {
  return (
    <div className="home">
        <div className="content">
          <p className="sub-title">$SDBY</p>
          <h1 className="title">Sadbaby Token</h1>
          <p className="description">
          SADBABY TOKEN ile hasta bebek ve çocuklara umut olabilirsiniz.
          </p>
          <div className="home-buttons">
          <button className="home-button">Buy $$SDBY</button>
          <button className="home-button">Whitepaper</button>
          </div>
        </div>
        <div className="image-container">

          {/* <div className="ellipse-container">
              <div className="ellipse pink"></div>
              <div className="ellipse orange"></div>
          </div> */}

          <div className="image">
              <img src={home} alt="home" className="img-responsive metaverse-char" />
          </div>

        </div>
    </div>
  );
}
