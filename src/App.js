import React from 'react';
import './Stylesheets/App.css';
import { Router } from '@reach/router'
import LandingPage from './Pages/LandingPage'
import SearchPage from './Pages/SearchPage'

const App = () => {
  return (
    <div className="App">
      <div className="Stars">
        <Router>
          <LandingPage path='/'/>
          <SearchPage path='/search'/>
        </Router>
      </div>
    </div>
  );
}

export default App;
