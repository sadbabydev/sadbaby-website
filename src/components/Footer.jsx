import React from "react";
import logo from "../assets/logo.png";



export default function Footer() {
  const links = {
    sadbaby:{
      title: "Sadbaby",
      data: {
        1:"Home",
        2:"About",
        3:"Roadmap",
        4:"Tokenomic",
        5:"Whitepaper"
      },
      data_link: {
        1:"#home",
        2:"#about",
        3:"#roadmap",
        4:"#tokenomic",
        5:"#whitepaper"
      },
    },
    clients:{
      title: "Parnters",
      data: {
        1:"Give Kids The Arts",
        2:"ENOC",
        3:"Unicef",
        4:"Child Rights Connect"
      },
      data_link: {
        1:"https://www.givekidsthearts.org",
        2:"https://enoc.eu",
        3:"https://www.unicef.org",
        4:"https://childrightsconnect.org"
      },
    },
    contact:{
      title: "Contact",
      data: {
        1:"social@sadbaby.org",
        2:"hi@sadbaby.com"
        
      },
      data_link: {
        1:"mailto:social@sadbaby.org",
        2:"mailto:hi@sadbaby.com"
      }
    },
    community:{
      title: "Community",
      data: {
        1:"Telegram",
        2:"Facebook",
        3:"Twitter",
        4:"Instagram",
        5:"Youtube"
      },
      data_link: {
        1:"https://t.me/sadbabyglobal",
        2:"https://www.facebook.com/SadbabyToken-104142708605129/",
        3:"https://twitter.com/sadbabyglobal",
        4:"https://www.instagram.com/sadbabytoken/",
        5:"https://www.youtube.com/c/SadBabyToken",
      }
    }
  };
  return (
    <footer>
      <div className="upper">
      <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p >For The Child's!</p>
        </div>
      </div>
      <div className="upper">
        <div className="links">
              <div className="link" >
                <h6 className="foot-head">{links.sadbaby.title}</h6>
                <ul>
                    <li >
                      <a href={links.sadbaby.data_link[1]} target="_blank" rel="noopener noreferrer">
                        {links.sadbaby.data[1]}
                      </a>
                    </li>
                    <li >
                      <a href={links.sadbaby.data_link[2]} target="_blank" rel="noopener noreferrer">
                        {links.sadbaby.data[2]}
                      </a>
                    </li>
                    <li >
                      <a href={links.sadbaby.data_link[3]} target="_blank" rel="noopener noreferrer">
                        {links.sadbaby.data[3]}
                      </a>
                    </li>
                    <li >
                      <a href={links.sadbaby.data_link[4]} target="_blank" rel="noopener noreferrer">
                        {links.sadbaby.data[4]}
                      </a>
                    </li>
                    <li >
                      <a href={links.sadbaby.data_link[5]} target="_blank" rel="noopener noreferrer">
                        {links.sadbaby.data[5]}
                      </a>
                    </li>
                </ul>
              </div>
              <div className="link" >
                <h6 className="foot-head">{links.clients.title}</h6>
                <ul>
                    <li >
                      <a href={links.clients.data_link[1]} target="_blank" rel="noopener noreferrer">
                        {links.clients.data[1]}
                      </a>
                    </li>
                    <li >
                      <a href={links.clients.data_link[2]} target="_blank" rel="noopener noreferrer">
                        {links.clients.data[2]}
                      </a>
                    </li>
                    <li >
                      <a href={links.clients.data_link[3]} target="_blank" rel="noopener noreferrer">
                        {links.clients.data[3]}
                      </a>
                    </li>
                    <li >
                      <a href={links.clients.data_link[4]} target="_blank" rel="noopener noreferrer">
                        {links.clients.data[4]}
                      </a>
                    </li>
                </ul>
              </div>
              <div className="link" >
                <h6 className="foot-head">{links.contact.title}</h6>
                <ul>
                    <li >
                      <a href={links.contact.data_link[1]}>
                        {links.contact.data[1]}
                      </a>
                    </li>
                    <li >
                      <a href={links.contact.data_link[2]}>
                        {links.contact.data[2]}
                      </a>
                    </li>
                </ul>
              </div>
              <div className="link" >
                <h6 className="foot-head">{links.community.title}</h6>
                <ul>
                    <li >
                      <a href={links.community.data_link[1]} target="_blank" rel="noopener noreferrer">
                        {links.community.data[1]}
                      </a>
                    </li>
                    <li >
                      <a href={links.community.data_link[2]} target="_blank" rel="noopener noreferrer">
                        {links.community.data[2]}
                      </a>
                    </li>
                    <li >
                      <a href={links.community.data_link[3]} target="_blank" rel="noopener noreferrer">
                        {links.community.data[3]}
                      </a>
                    </li>
                    <li >
                      <a href={links.community.data_link[4]} target="_blank" rel="noopener noreferrer">
                        {links.community.data[4]}
                      </a>
                    </li>
                    <li >
                      <a href={links.community.data_link[5]} target="_blank" rel="noopener noreferrer">
                        {links.community.data[5]}
                      </a>
                    </li>
                </ul>
              </div>
        </div>
      </div>
      <div className="lower">
        <span>&copy;Sadbaby 2022. All rights reserved.</span>
      </div>
    </footer>
  );
}
