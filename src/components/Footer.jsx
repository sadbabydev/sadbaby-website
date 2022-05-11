import React from "react";
import logo from "../assets/logo.png";



export default function Footer() {
  const links = [
    {
      title: "Sadbaby",
      data: ["Home", "About", "Roadmap", "Tokenomic", "Whitepaper"],
    },
    {
      title: "Clients",
      data: ["Client1", "Client2", "Clien3"],
    },
    {
      title: "Contact",
      data: ["example@mail.com", "Support"],
    },
    {
      title: "Community",
      data: ["Twiiter", "Telegram", "Instagram"],
    },
  ];
  return (
    <footer>
      <div className="upper">
      <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Step into the Future!</p>
        </div>
      </div>
      <div className="upper">
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h6>{title}</h6>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022 Sadbaby</span>
      </div>
    </footer>
  );
}
