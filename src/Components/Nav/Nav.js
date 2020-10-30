import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from "../../App"
import { Menu } from "../../Pages/menu-pg"
import { Rogue } from "../../Pages/rouge-pg"

import './Nav.scss'



class Nav extends Component {
    render(){
        return(
            <div className='nav-container'>
                <Link path='/'>About</Link>   
                <Link path={Menu} className='nav-item' exact>Menu Planner</Link>
                <Link path={Rogue} className='nav-item'exact>Rogue Mode</Link>
            </div>
          
        )
    }
}

export default Nav;