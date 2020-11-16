import React , {useState} from 'react';
import './Random.scss';
import API from '../API/API'


const Random = () => {
const [random, setRandom] = useState(false);
const onClick = () => setRandom( random === true);
return(
    <div>
    <div className="header"> 
    <p> Forget Them</p>  
    <p>You tried, ok. There's no way to please everyone.</p>    
    <button className='rogue-button' onClick={onClick}>Go Rogue</button>
    </div>
    {setRandom && <Result />}
    </div>
)
}

const Result = () => {
    return(
       <div className="menu">
         <h1>Appetizer</h1>
         <API meal="appetizer"/>
         <h1>Dinner</h1>
         <API meal="dinner, meal"/>
         <h1>Dessert</h1>
         <API meal="dessert"/>
         </div>
    )
}; 


 export default Random;