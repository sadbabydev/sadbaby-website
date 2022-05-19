//import components
import React, { useState } from "react";
import Clients from "./components/Clients";
import Clients2 from "./components/Clients2";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import SuperRare from "./components/SuperRare";
import Token from "./components/token";
import Media from "./components/Media";
import Video from "./components/Video";

//import css
import "./css/base/_base.css";
import "./css/components/_card.css";
import "./css/components/_footer.css";
import "./css/components/_navbar.css";
import "./css/components/_scrollToTop.css";
import "./css/sections/_clients.css";
import "./css/sections/_free.css";
import "./css/sections/_home.css";
import "./css/sections/_like.css";
import "./css/sections/_release.css";
import "./css/sections/_signup.css";
import "./css/sections/_superRare.css";
import "./css/style.css";
import "./css/chart.css";
import "./css/responsive.css";

import img1 from './assets/metaverse1.jpeg'
import img2 from './assets/metaverse2.jpeg'
import img3 from './assets/metaverse3.jpeg'
import img4 from './assets/metaverse5.jpeg'

import vid1 from './assets/vid1.mp4';
import vid2 from './assets/vid2.mp4';

import clients3 from "./assets/unicef.png";
import clients2 from "./assets/enoc.png";
import clients1 from "./assets/givekids.png";
import clients4 from "./assets/crc.png";
import clients5 from "./assets/client6.svg";
import clients6 from "./assets/coinmarketcap.svg";
import clients7 from "./assets/coingecko.svg";
import clients8 from "./assets/github.png";
import clients9 from "./assets/bscscan.svg"

const clientUrls = {
  1:'https://www.givekidsthearts.org/',
  2:'https://enoc.eu/',
  3:'https://www.unicef.org/',
  4:'https://childrightsconnect.org/',
  5:'https://www.certik.com/projects/sadbaby',
  6:'https://coinmarketcap.com/currencies/sadbaby/',
  7:'https://www.coingecko.com/en/coins/sadbaby/',
  8:'https://github.com/sadbabytoken',
  9:'https://bscscan.com/'
}


function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div data-theme={theme} className="app-container">
      <div className="page-container">
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Free  />
      <Video video={vid1}/>
      <Token />
      <Clients urls={clientUrls} clients1={clients1} clients2={clients2} clients3={clients3} clients4={clients4}/>
      <SuperRare />
      <Release />
      <div className="row">
          <img src={img2} alt="sadbaby" className="metaverse-image"/>
          <img src={img3} alt="sadbaby" className="metaverse-image"/>
      </div>
      <Like />
      <Media/>
      <Video video={vid2}/>
      <div className="row">
          <img src={img1} alt="sadbaby" className="metaverse-image"/>
          <img src={img4} alt="sadbaby" className="metaverse-image"/>
      </div>
      <Clients2 urls={clientUrls} clients1={clients6} clients2={clients5} clients3={clients8} clients4={clients7} clients5={clients9}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
