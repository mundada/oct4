import React, { Component } from 'react';
import './App.css';

import logo from './AM.jpg';
import logo1 from './buffalo.png'
import img from './download.jpg';
import img1 from './w.jpg';
import img2 from './w1.jpg';
import img3 from './w2.jpg';
import c2 from './c2.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <img style = { { height: '150px', width: '1000px'}}src={c2} className="App-header" alt="header" />
           <h1 className="App-title">Nobody Beats Our Prices, Guaranteed!</h1>
           
        </header>
  
       <p className="App-intro">
          Website under construction.... <code>Will be coming soon!</code>
        </p>
     
        <div class="div1">This div is smaller (width is 300px and height is 100px).</div>
       <h1><b> FIND THE RIGHT WASHERS FOR YOU </b></h1>
       <h3> SEE ALL WASHERS > </h3>
        <div class="flex-container">
       <div> <img src={img} className="App-img" alt="img" /></div>
        <div> <img src={img1} className="App-img1" alt="img1"/></div>
        <div> <img src={img2} className="App-img2" alt="img2"/></div>
        <div> <img src={img3} className="App-img3" alt="img3"/></div>
</div>
       <footer classname= "App-footer">
        <img src={logo1} className="App-logo1" alt="logo1" />
        <h3 className="App-title">Thank You For Visiting this Page</h3>
        </footer>
  </div>
  
    );
  }
} 
export default App;
