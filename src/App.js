import React, { Component } from 'react';
import './Stylesheets/App.css';
import { Router } from '@reach/router'
import LandingPage from './Pages/LandingPage'
import AllSearchItems from './Pages/AllSearchItems'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Stars">
          <Router>
            <LandingPage path='/'/>
            <AllSearchItems path='/search'/>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
