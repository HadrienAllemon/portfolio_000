import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav.js';
import Pic from './components/pic.js';
import Tbody from './components/textbody.js';
import {BrowserRouter,Route} from 'react-router-dom';
import $ from 'jquery';

var bannerheight;

class App extends Component {
  componentDidMount(){
    bannerheight = $('.banner').height()
    $(window).scroll(()=>{
        console.log($(window).scrollTop())
        let sc = $(window).scrollTop()+$('.banner').height()
        let msc = Math.min(sc,890);
        $('#campfire').css('top',msc*.9+'px');
        $('#BG1').css('top',msc*.8+'px');
    });
  }
  render() {
    return (
      <div className="App">
        <div id='campfire' style={{top:bannerheight+'px'}} />
        <div id='BG1' style={{top:bannerheight+'px'}} />
        <div id='BG2' style={{top:bannerheight+'px'}} />
        <div className='banner'>
          <Pic/>
          <Nav/>
        </div>
        <Tbody/>
      </div>
    );
  }
}



export default App;
