import React from 'react';
import '../App.scss'
import Hero from '../Components/Hero/Hero'
import dinner from '../Assets/dinner.jpg'


function About() {
  return (
    <div className="About">
  <Hero />
  <img src={dinner} alt="dinner table" style=
  {{
    height: "70%",
    width: "100%"
  }}>
  </img>
<div className="body">
  {/* <p>This is an app for people pleasers who chronically over extend themselves. Get Together helps you to (falsley) appear like you have everything under control.</p> */}
  <div className="about-copy">
  <p>Our Menu Planner feature allows you to hone down on a plan</p>
  <button>Menu Planner</button>
  </div>
  <div className="about-copy"> 
  <p>If that doesn't work, try Rogue Mode as a last resort</p>
  <button>Rogue Mode</button>
  </div>
  </div>
    </div>
  );
}

export default About;
