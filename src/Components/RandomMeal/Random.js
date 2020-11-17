import React , {useState} from 'react';
import './Random.scss';
import API from '../API/API'

const Result = () => {
    return(
       <div className="menu">
         {/* <h1>Appetizer</h1>
         <API meal="appetizer"/>
         <h1>Dinner</h1>
         <API meal="dinner"/>
         <h1>Dessert</h1>
         <API meal="dessert"/> */}
         </div>
    )
}; 

const Random = () => {
const [random, setRandom] = useState(false);
const onClick = () => {
    setRandom(true)
    console.log(random)
}
 if(random){
 return(
 <div>
    <div className="header"> 
    <p> Forget Them</p>  
    <p>You tried, ok. There's no way to please everyone.</p>    
    <button className='rogue-button'onClick={onClick}>Go Rogue</button>
    </div>
  <Result />
  </div>
 )
 }else{
     return(
    <div className="header"> 
    <p> Forget Them</p>  
    <p>You tried, ok. There's no way to please everyone.</p>    
    <button className='rogue-button' onClick={onClick}>Go Rogue</button>
    </div>
     )
 }
}





 export default Random;