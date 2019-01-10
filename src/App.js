import React from 'react';
import './Stylesheets/App.css';
import { Router } from '@reach/router'
import LandingPage from './Pages/LandingPage'
import SearchPage from './Pages/SearchPage'
import Stars from './Stylesheets/Images/stars.png'

const App = () => {

  const style = {
    background: `url(${Stars}) repeat top center`
  }

  return (
    <div className="App">
      <div className="Stars" style={style}>
        <Router>
          <LandingPage path='/'/>
          <SearchPage path='/search'/>
        </Router>
      </div>
    </div>
  );
}

export default App;
