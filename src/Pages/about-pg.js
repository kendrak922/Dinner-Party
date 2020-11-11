import React from 'react';
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
    </div>
  );
}

export default About;
