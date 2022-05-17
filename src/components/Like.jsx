import React from "react";
import Chart2 from "./Chart";

export default function Like() {
  return (
    <div className="like" id="tokenomic">
      <h2 className="title nav-link sec-head">Tokenomic</h2><br />
      <div className="container">
        <div className="content">
          <p className="token-li">Total Supply : <span>47.000.000.000</span></p>
          <p className="token-li">Cırculating : <span>24.000.000.000</span></p>
          <p className="token-li">Coin Burn : <span>23.000.000.000</span></p>
          <p className="token-li">Holders : <span>5.000+</span></p>
        </div>
        <div className="chart">
            <Chart2 />
        </div>
      </div>
    </div>
  );
}
