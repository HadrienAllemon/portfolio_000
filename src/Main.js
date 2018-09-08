import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav.js';
import Pic from './components/pic.js';
import Tbody from './components/textbody.js';
import {BrowserRouter,Route} from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <div className="App">
        <div className='banner'>
          <Pic/>
          <Nav/>
        </div>
        <Tbody/>
      </div>
    );
  }
}

export default Main;
