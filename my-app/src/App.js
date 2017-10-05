import React, { Component } from 'react';
import './App.css';
import Ashish from './Ashish.js';
import Tick from './Tick.js';
import logo from './AM.jpg';
import logo1 from './buffalo.png';
import Clock from './State.js';
import Toggle from './Eventhandler.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <h1 className="App-title">Where Dreams Come True</h1>
        </header>
  
        <p className="App-intro">
          Website under construction.... <code>Will be coming soon!</code>
        </p>
        <Tick/>
        <Clock />
        <Ashish/>
        <Toggle/>

        <footer classname= "App-footer">
        <img src={logo1} className="App-logo1" alt="logo1" />
        <h3 className="App-title">Thank You For Visiting this Page</h3>
        </footer>
      </div>
    );
  }
}

export default App;
