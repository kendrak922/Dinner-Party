import React , {useState} from 'react';
import './Random.scss';
import API from '../API/API'

const Result = () => {
    return(
       <div className="menu">
         <h1>Appetizer</h1>
         <API meal="starter" />
         <h1>Dinner</h1>
         <API meal="dinner" />
         <h1>Dessert</h1>
         <API meal="dessert" />
         </div>
    )
}; 

const Random = () => {
const [random, setRandom] = useState('null');
const onClick = () => {
    setRandom(random === true)
    console.log(random)
}
 if(random === 'null'){
    return(
        <div className="header"> 
        <p> Forget Them</p>  
        <p>You tried, ok. There's no way to please everyone.</p>    
        <button className='rogue-button' onClick={onClick}>Go Rogue</button>
        </div>
         )
 }else{
    return(
        <div>
           <div className="header"> 
           <p> Forget Them</p>  
           <p>You tried, ok. There's no way to please everyone.</p>    
           </div>
         <Result />
         </div>
        )
 }
}





 export default Random;