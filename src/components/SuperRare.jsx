import React from "react";
import Card from "./Card";
import super1 from "../assets/super2.png";
import super2 from "../assets/super3.png";

export default function SuperRare() {
  const data = [
    {
      id:1,
      image: super1,
      series: "$Sadbaby",
      title: "NFT 1",
    },
    {
      id:2,
      image: super2,
      series: "$Sadbaby",
      title: "NFT 2",
    }
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title nav-link">Our Virtual Assistants</h2>
        <p className="description">
        
        </p>
      </div>
      <div className="cards">
        {data.map(({ id, image, series, title,}, index) => (
          <Card  className="card kart" key ={id} image={image} series={series} title={title} />
        ))}
      </div>
    </div>
  );
}
