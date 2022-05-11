import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import super1 from "../assets/3.png";
import release2 from "../assets/release2.png";

export default function Free() {
  return (
    <div className="free mobile-sections">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Sadbaby</h2>
          <p className="description">
          Babies may born with various diseases. While these diseases are sometimes treatable, there are some that cannot be cured. Due to high treatment costs, these diseases make the families of sick babies and children helpless. Many infants and children cannot be treated because of high treatment costs so those who cannot be treated unfortunately may lose their lives. In deed, it is possible to meet these expenses. With SADBABY TOKEN, you can be a hope for sick babies and children.
          </p>
          <p className="description">
          <h2 className="title">Community Powered</h2>
          SADBABY TOKEN belongs to the decentralized community that aims to make those who join its community of happy people happy. We welcome and embrace different perspectives to turn SADBABY TOKEN into the best community in crypto. It acts with the mission of making unhappy babies and children happy.
          </p>
          <p className="description">
          <h2 className="title">Instant Rewards</h2>
            Existing holders are charged a 1% fee for each transaction on the SADBABY TOKEN network. This means you will earn more SADBABY TOKENs just by keeping them in your wallet. Watch your SADBABY TOKENs grow with every transaction!
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Token Adı"
            title="Purple Man"
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Token Adı"
            title="David"
          />
        </div>
      </div>
    </div>
  );
}
