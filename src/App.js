import React from 'react';
import './App.scss';
import Nav from './Components/Nav/Nav'
import {BrowserRouter , Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
