//import components
import React, { useState } from "react";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import SuperRare from "./components/SuperRare";
import Token from "./components/token";

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


function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div data-theme={theme} className="app-container">
      <div className="page-container">
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home/>
      <Free  />
      <Token />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <Clients />
      </div>
      <Footer />
    </div>
  );
}

export default App;
