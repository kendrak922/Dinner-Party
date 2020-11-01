import React from 'react';
import Random from '../Components/RandomMeal/Random'


function Rogue() {
  return (
    <div className="Menu">
      <header className="Menu-header">
     Forget them, lets go Rogue 
      </header>
      <p>You tried, ok. There's no way to please everyone.</p>
      <Random />
      <h2>Appetizer</h2>
      <h2>Dinner</h2>
      <h2>Dessert</h2>
    </div>
  );
}

export default Rogue;
