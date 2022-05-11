import React from "react";
import Card from "./Card";
import super1 from "../assets/super2.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";

export default function SuperRare() {
  const data = [
    {
      id:1,
      image: super1,
      series: "$Sadbaby",
      title: "Purple Man",
    },
    {
      id:2,
      image: super2,
      series: "$Sadbaby",
      title: "Beige",
    },
    {
      id:3,
      image: super3,
      series: "$Sadbaby",
      title: "David",
    },
    {
      id:4,
      image: super3,
      series: "$Sadbaby",
      title: "David",
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title nav-link">Our Virtual Assistants</h2>
        <p className="description">
        You will not encounter any problems! Because they exist.
        </p>
      </div>
      <div className="cards">
        {data.map(({ id, image, series, title,}, index) => (
          <Card className="card" key ={id} image={image} series={series} title={title} />
        ))}
      </div>
    </div>
  );
}
