import React, { useState } from "react";
import "./Footer.css";
import angellistLogo from '../../assessts/angellist.png'
import linkedinLogo from '../../assessts/iconmonstr-linkedin-1.png'

const Footer = () => {
    const [email, setEmail] = useState("");
    const [msg,setMsg] = useState("");

  return (
    <footer id="contact-us">
      <div className="msg-nd-info">
        <div
        id="contact-us"
         className="msg">
          <input
        
            className="email-input"
            type="text/ "
            placeholder="enter email here..."
          />
          <input
            className="msg-input"
            type="text"
            placeholder="enter your message here.."
          />
          <button className="contact-button">Send Message</button>
        </div>

        <div className="info">
          <div className="address">
            <h3>McKinney, TX, USA</h3>
            <h3>contact@aarnaanalytics.com</h3>
            <h3>(214)856-0385</h3>
          </div>
          <div className="linkedin">
              <a href="http://linkedin.com">
                  <img src={linkedinLogo}/>


              </a>
              <a href="https://gooogle.com">
                  <img src={angellistLogo}/>

              </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h6>©2020 Aarna Analytics</h6>
        <h6>
          Designed By <span>Bhanu Singh</span>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
