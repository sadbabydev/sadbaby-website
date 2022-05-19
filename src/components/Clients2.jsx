import React from "react";




export default function Clients2(props) {
  const  {urls, clients1, clients2, clients3, clients4,clients5} = props;
  return (
    <div className="clients">
      <div className="container">
      <div className="clients-container">
            <div className="client" >
              <a href={urls[6]}>
              <img src={clients1} alt="client" />
              </a>
            </div>
            <div className="client" >
            <a href={urls[5]}>
              <img src={clients2} alt="client" />
              </a>
            </div>
            <div className="client" >
            <a href={urls[8]}>
              <img src={clients3} alt="client" />
              </a>
            </div>
            <div className="client" >
            <a href={urls[7]}>
              <img src={clients4} alt="client" />
              </a>
            </div>
            <div className="client" >
            <a href={urls[9]}>
              <img src={clients5} alt="client" />
              </a>
            </div>
            
        </div>
      </div>
    </div>
  );
}
