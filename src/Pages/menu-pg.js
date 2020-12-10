import React from 'react';
import FoodOptions from "../Components/FoodOptions/FoodOptions"

function Menu() {
  return (
    <div className="menu">
      <header className="menu-header">
      <div className="transparent">
     <h2> Let's Get Started Shall We?</h2>
     <p>1. Answer Some Questions about Your Guests' Needs</p>
     <p>2. Get Cooking! </p>
     </div>
      </header>
      <FoodOptions />
    </div>
  );
}

export default Menu;
