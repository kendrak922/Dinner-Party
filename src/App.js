import React from 'react';
import './App.scss';
import Nav from './Components/Nav/Nav'
import {BrowserRouter , Switch, Route} from 'react-router-dom'
import Menu from './Pages/menu-pg'
import Rogue from './Pages/rogue-pg'
import About from './Pages/about-pg'



function App() {
  return (
    <div className="App">
      <header className="App-header">
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/"component={About} exact></Route>
        <Route path='/menu' component={Menu} exact></Route>
        <Route path='/rogue'component={Rogue} exact></Route>
      </Switch>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
