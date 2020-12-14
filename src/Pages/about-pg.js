import React from 'react';
import '../App.scss'
import Hero from '../Components/Hero/Hero'
import dinner from '../Assets/dinner.jpg'


function About() {
  return (
    <main className="about">
  <Hero />
  <img src={dinner} alt="dinner table" />
<div className="about-container">
<h2 className="about-title">About The App</h2>
  <div className="about-copy">
  <p>This is an app for people pleasers who chronically over extend themselves. Get Together helps you to (falsley) appear like you have everything under control.</p>
  <br></br>
  <p>Our Menu Planner feature allows you to hone down on a plan by brainstorming some recieps that fall within the constraints of your party attendees.</p>
  <br></br>
  <p>If that doesn't work, try Rogue Mode as a last resort. A feature that allows you to randomly select a menu.</p>
  <br></br>
  </div>
  </div>
    </main>
  );
}

export default About;
