import React, {Component} from 'react';
import './Random.scss';
import API from '../API/API'

class Random extends Component{
    render(){

    
    return(
        <div>
        <button className='rogue-button'>Go Rogue</button>
        <API />
        </div>
    )
    }
}




 export default Random;