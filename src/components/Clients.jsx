import React from "react";




export default function Clients(props) {
  const  {urls, clients1, clients2, clients3, clients4} = props;
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
            <div className="client" >
              <a href={urls[1]}>
              <img src={clients1} alt="client" />
              </a>
            </div>
            <div className="client" >
            <a href={urls[2]}>
              <img src={clients2} alt="client" />
              </a>
            </div>
            <div className="client" >
            <a href={urls[3]}>
              <img src={clients3} alt="client" />
              </a>
            </div>
            <div className="client" >
            <a href={urls[4]}>
              <img src={clients4} alt="client" />
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}
