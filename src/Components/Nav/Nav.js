import React from 'react';
import { Link} from 'react-router-dom';


import './Nav.scss'



const Nav =() => {
   
        return(
            <div className='nav-container'>
            <h4 className='name'><Link to='/'>Get it Together</Link></h4>
                <Link to='/'>About</Link>   
                <Link to='/menu' className='nav-item'>Menu Planner</Link>
                <Link to='rogue' className='nav-item'>Rogue Mode</Link>
            </div>
          
        )
}

export default Nav;