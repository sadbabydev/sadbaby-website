import React, { Component } from 'react'
import home from "../assets/home.png";
import '../css/sections/_home.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {RiFileCopyFill} from 'react-icons/ri'

export default class Home extends Component {
  state = {
    contract_adress: 'SOON',
    copied: false,
  };

  render() {
    return (
      <div className="home" id="home">
      <div className="content">
        <p className="sub-title">$SDBY EXCITED FOR OVER 100 CEX/DEX LISTINGS</p>
        <h1 className="title">Sadbaby Token</h1>
        <p className="description">
          Babies can be born with various diseases. While these diseases are sometimes treatable, there are some diseases that cannot be cured. These diseases leave families of sick babies and children helpless due to the high cost of treatment. Many babies and children cannot be treated due to the high cost of treatment, and those who cannot be treated unfortunately lose their lives. As a matter of fact, it is possible to meet these expenses. With SADBABY TOKEN, you can be hope for sick babies and children.<br /><br />
          <p>
            <b>Contract Adress : </b>{this.state.contract_adress} 
            <span className='copy-clip' >
              {/* <RiFileCopyFill/> */}
              <CopyToClipboard text={this.state.contract_adress} onCopy={() => {
                this.setState({copied: true})
                setTimeout(function(){
                  return this.setState({copied: false})},2000);
                }}>
                <RiFileCopyFill/>
              </CopyToClipboard>
            </span>
            {this.state.copied ? <span style={{color: 'green',fontSize:'14px',marginLeft:'.5rem'}}>Copied.</span> : null}
          </p>
        </p>
        <div className="home-buttons">
        <a href='/' className="home-button" target="_blank" rel="noopener noreferrer">Buy $SDBY</a>
        <a href='sadbaby-whitepaper.pdf' className="home-button" target="_blank" rel="noopener noreferrer">Whitepaper</a>
        </div>
      </div>
      <div className="image-container">

        {/* <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
        </div> */}

        <div className="image">
            <img src={home} alt="home" className="img-responsive metaverse-char" />
        </div>

      </div>
  </div>
    )
  }
}
