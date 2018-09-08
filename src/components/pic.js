import React, { Component } from 'react';
import '../App.css';
import keyboardIMG from './keyboard.jpg';

var cssobj = {
  background: "url('"+keyboardIMG+"')",
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
}
class Pic extends Component {

  render() {
    return (
      <div className="pic" style={cssobj}>

      </div>
    );
  }
}

export default Pic;
