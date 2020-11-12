import React from 'react';
import './Footer.scss'
import waves from "./FooterBackground.svg"
// import { ReactComponent as FooterBackground } from './footer.svg';
const Footer = ()=>{

return(
    <div className="footer-container">
   <img src={waves} alt="dinner table" style=
  {{
    marginBottom:"-20px",
    width: "100%"
  }}></img>
    <div className="footer">
        <h1>Contact Us</h1>
        <label>Name: <br></br>
        <input name="name" type="text"></input>
        </label>
        <label>Email:<br></br> 
        <input name="email" type="text"></input>
        </label>
        <label>Message: <br></br>
        <textarea name="message" type="textarea"></textarea>
        </label>
        <input type="submit" value="submit" className="submit"></input> 
    </div>
    </div>
)
}

export default Footer;