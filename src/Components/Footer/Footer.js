import React from 'react';
import './Footer.scss'
import waves from "./FooterBackground.svg"
// import { ReactComponent as FooterBackground } from './footer.svg';
const Footer = ()=>{

return(
    <div className="footer-container">
   <img src={waves} alt="wave styling"></img>
    <form className="footer" data-netlify="true">
        <h1>Contact Us</h1>
        <label>Name: <br></br>
        <input name="name" type="text" />
        </label>
        <label>Email:<br></br> 
        <input name="email" type="text" />
        </label>
        <label>Message: <br></br>
        <textarea name="message" type="textarea" />
        </label>
        <input type="submit" value="submit" className="submit" /> 
    </form>
    </div>
)
}

export default Footer;