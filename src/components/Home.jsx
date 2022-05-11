import React from "react";
import home from "../assets/home.png";
import '../css/sections/_home.css';


function Home() {
  return (
    <div className="home">
        <div className="content">
          <p className="sub-title">$SDBY</p>
          <h1 className="title">Sadbaby Token</h1>
          <p className="description">
          Babies can be born with various diseases. While these diseases are sometimes treatable, there are some diseases that cannot be cured. These diseases leave families of sick babies and children helpless due to the high cost of treatment. Many babies and children cannot be treated due to the high cost of treatment, and those who cannot be treated unfortunately lose their lives. As a matter of fact, it is possible to meet these expenses. With SADBABY TOKEN, you can be hope for sick babies and children.
          </p>
          <div className="home-buttons">
          <button className="home-button">Buy $SDBY</button>
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
export default Home;