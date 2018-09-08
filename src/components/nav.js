import React, { Component } from 'react';
import '../App.css';
import Buttonwrapper from './buttonwrapper.js'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className='toptxt'>
          <h1>Hadrien Allemon</h1>
          <h2>Front-End Developer</h2>
        </div>
        <div className = 'bottomtxt'>
          <div className='bottomSup' ></div>
          <Buttonwrapper/>
        </div>
      </div>
    );
  }
}

export default Nav;
