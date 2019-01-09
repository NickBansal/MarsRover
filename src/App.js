import React, { Component } from 'react';
import './Stylesheets/App.css';
import { Router } from '@reach/router'
import LandingPage from './Pages/LandingPage'
import AllSearchItems from './Pages/AllSearchItems'

class App extends Component {

  state = {
    searchTerm: "ewgfweg"
  }

  render() {
    return (
      <div className="App">
        <div className="Stars">
          {/* <Navbar handleKeyPress={this.handleKeyPress}/> */}
          <Router>
            <LandingPage path='/'/>
            <AllSearchItems 
            searchTerm={this.state.searchTerm}
            path='/search'/>
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
