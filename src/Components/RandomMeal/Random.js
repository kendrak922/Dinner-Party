import React from 'react';
import './Random.scss';
import API from '../API/API'

const Random = () => {
    return(
        <div>
        <button className='rogue-button'>Go Rogue</button>
        <p>You tried, ok. There's no way to please everyone.</p>
      <h2>Appetizer</h2>
      <API meal="appetizer"/>
      <h2>Dinner</h2>
      <API meal="dinner"/>
      <h2>Dessert</h2>
      <API meal="dessert"/>
        </div>
    )
}




 export default Random;