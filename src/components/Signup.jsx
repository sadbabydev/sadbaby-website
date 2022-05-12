import React from "react";
import char from "../assets/antsma.png";



export default function Signup() {
  return (
    <section className="signUp">
    <div className="home">
        <div className="content">
          <p className="sub-title">$SDBY</p>
          <h1 className="title">Antalya SMA and Association for Combating Genetic Diseases</h1>
          <p className="description">
          As it is known, the SMA treatment process is a long journey that is extremely difficult and includes financial difficulties. As SadBaby, we provide all kinds of sponsorship for our children.
          </p>
          <div className="home-buttons">
          <a href="https://smagender.com/">
            <button className="link-button"> 
              Website
            </button>
          </a>            
          </div>
        </div>
        <div className="image-container">

          {/* <div className="ellipse-container">
              <div className="ellipse pink"></div>
              <div className="ellipse orange"></div>
          </div> */}

          <div className="image">
              <img src={char} alt="home" className="img-responsive metaverse-char" />
          </div>

        </div>
    </div>
    </section>
  );
}
