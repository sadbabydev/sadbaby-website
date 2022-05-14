import React from "react";

import clients3 from "../assets/unicef.png";
import clients2 from "../assets/enoc.png";
import clients1 from "../assets/givekids.png";
import clients4 from "../assets/crc.png";


export default function Clients() {
  const data = [clients1, clients2, clients3, clients4];
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img src={client} alt="client" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
