import React, { Component } from 'react';
import './Stylesheets/App.css';
import Navbar from './Components/Navbar'
import { Router } from '@reach/router'
import LandingPage from './Pages/LandingPage'

class App extends Component {

  state = {
    searchTerm: ""
  }

  render() {
    return (
      <div className="App">
        <div className="Stars">
          <Navbar handleKeyPress={this.handleKeyPress}/>
          <Router>
            <LandingPage path='/'/>
          </Router>
        </div>
      </div>
    );
  }

  handleKeyPress = (searchTerm) => {
    this.setState({
      searchTerm
    })
  }
}

export default App;
