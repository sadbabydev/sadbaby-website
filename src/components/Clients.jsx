import React from "react";




export default function Clients(props) {
  const  {clients1, clients2, clients3, clients4} = props;
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
            <div className="client" >
              <img src={clients1} alt="client" />
            </div>
            <div className="client" >
              <img src={clients2} alt="client" />
            </div>
            <div className="client" >
              <img src={clients3} alt="client" />
            </div>
            <div className="client" >
              <img src={clients4} alt="client" />
            </div>
        </div>
      </div>
    </div>
  );
}
