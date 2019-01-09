import React, { Component } from 'react';
import './Stylesheets/App.css';
import Navbar from './Components/Navbar'

class App extends Component {

  state = {
    searchTerm: ""
  }

  render() {
    return (
      <div className="App">
        <div className="Stars">
          <Navbar handleKeyPress={this.handleKeyPress}/>
        </div>
      </div>
    );
  }

  handleKeyPress = (e) => {
    console.log(e)
  }
}

export default App;
