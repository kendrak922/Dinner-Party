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
  <p>This is an app for people pleasers who chronically overextend themselves. Get Together helps you to (falsely) appear like you have everything under control.</p>
  <br></br>
  <p>Our Menu Planner tool allows you to generate a meal ideas by brainstorming some recipes that will satisfy all of your friends' needs.</p>
  <br></br>
  <p>If that doesn't work, try Rogue Mode as a last resort. A feature that allows you to randomly select a menu.</p>
  <br></br>
  </div>
  </div>
    </main>
  );
}

export default About;
