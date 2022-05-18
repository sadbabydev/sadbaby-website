import React from "react";
import Chart2 from "./Chart";

export default function Like() {
  return (
    <div className="like" id="tokenomic">
      <h2 className="title nav-link sec-head">Tokenomic</h2><br />
      <div className="container">
        <div className="content">
          <p className="token-li">Total Supply : <span>25000000000</span></p>
          <p className="token-li">Burn : <span>5000000000</span></p>
          <p className="token-li">Cırculating : <span>25000000000</span></p>
          <p className="token-li">- <i>Buy Fee x Sell Fee</i></p>
          <p className="token-li">Development : <span>%1</span></p>
          <p className="token-li">Marketing : <span>%5</span></p>
          <p className="token-li">Charity : <span>%5</span></p>
          <p className="token-li">Liquidity : <span>%5</span></p>
        </div>
        <div className="chart">
            <Chart2 />
        </div>
      </div>
    </div>
  );
}
